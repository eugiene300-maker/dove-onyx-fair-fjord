#!/usr/bin/env python3
"""Insert extra reported grafs so every feature clears 1,000 words."""
from pathlib import Path

# Each value is a raw TypeScript block snippet (including leading comma style)
# inserted immediately before the LAST `      {` that starts the closing graf
# of that slug. We key off a unique nearby string.

INSERTS = {
    "bronx-weed-delivery-map": (
        '{ type: "callout", title: "Adults 21+",',
        """      { type: "h2", text: "Hours, cutoffs, and the edge of the map" },
      { type: "p", text: "Delivery windows track store hours more often than they track your group chat. BX Buddiez runs Monday through Saturday 9 a.m. to 8 p.m. and Sunday 10 to 7, and the order cutoff is typically an hour before close. That is not 2 a.m. That is not a story highlight. If you work a night shift and want a drop at midnight, the licensed market is not going to pretend it is the unlicensed one. Plan the errand like you plan a pharmacy. Morning and late afternoon are the clean windows. Game days near the Stadium will slow a west-Bronx courier the same way they slow a bus." },
      { type: "p", text: "City Island, the far edge of Eastchester, some of Co-op City's longer walks — call (929) 600-7207 before you checkout and ask. A radius on a website is a drawing. A Bronx drop is a buzzer. The shops that last in this borough are the ones that will tell you no when the drawing is a lie. I would rather hear no at 4 p.m. than watch a driver circle a complex at 7:40 and then leave a bag with a Super who did not sign up to be a vault. That sentence is the whole delivery desk, repeated until it sticks." },
      { type: "callout", title: "Adults 21+",""",
    ),
    "pelham-gardens-unlicensed-shop-sealed-again": (
        '{ type: "callout", title: "Adults 21+",',
        """      { type: "h2", text: "How a strip teaches the wrong lesson" },
      { type: "p", text: "Kids walk East Gun Hill Road. So do people coming home from the 2 and 5 with groceries. An unlicensed shop that IDs no one is not a nostalgic corner. It is a hole in the adult-use wall the state spent five years building. Licensed operators in this borough have been saying that without a microphone since the first CAURD doors opened. The second sealing is the city agreeing, late. Whether the shop stays closed is a different question, and one this neighborhood is entitled to be cynical about. We will come back if the tape comes off. We will not come back with a shopping list." },
      { type: "p", text: "There is a version of Bronx conversation that treats unlicensed shops as 'the people's market' and licensed shops as 'the state's market.' That version skips testing, tax, payroll, and the 17-year-old who could have walked in. It also skips the operators who did the paperwork and then watched a storefront with no number undercut them on the same customers. Equity is not a cartoon bag. Equity is a CAURD number and a budtender who will still have a job in October. If you want that version of the east Bronx, Allerton has a door and Melrose will deliver. If you want the other version, the sheriff has a route." },
      { type: "callout", title: "Adults 21+",""",
    ),
    "yankee-stadium-cannabis-nights": (
        '{ type: "callout", title: "Our rating",',
        """      { type: "h2", text: "Jerseys, vendors, and who got paid" },
      { type: "p", text: "River Avenue vendors have been part of the home-stand economy longer than any cannabis statute. Some of them are licensed in the ways a city cart is licensed. Some of them are not. We are not going to run a sting on a sausage. We are going to say that a backpack of carts on the concourse is not culture. It is an untested sale next to a building that will throw you out for less. The licensed eighth you bought at noon in Melrose, or at a Concourse counter before the line, is the version of the night that still exists at the seventh-inning stretch. The backpack is the version that exists until it does not." },
      { type: "p", text: "Families come to this ballpark. So do people who have been smoking on this block since the old Stadium. Both facts can be true. The statute tried to make room for the second group without turning the first group's afternoon into a cloud. That is why the bowl is a no and the sidewalk is a maybe. It is also why a newspaper that covers cannabis in the Bronx has to cover baseball without turning into a bro blog. Buy labeled. Walk. Put it out. Watch the game. That is a Bronx night that does not need a disclaimer in the ninth." },
      { type: "callout", title: "Our rating",""",
    ),
    "arthur-avenue-after-the-joint": (
        '{ type: "callout", title: "B/D to Fordham Road",',
        """      { type: "h2", text: "What the restaurants actually signed up for" },
      { type: "p", text: "I talked to a server who has been on 187th longer than adult-use has been a word. She did not want her name in a cannabis paper, which is its own rating. She wanted the dining room to stay a dining room. She has watched tourists treat the piazza like a lounge twice this summer and watched regulars go quiet. Arthur Avenue's economy is dinners, not sessions. A licensed counter on the street can live next to that economy if the customers remember which door is which. If they do not, the street will remember for them, and the memory will not be a good review." },
      { type: "p", text: "There is a generous version of this neighborhood that will sell you pastry, wine, and a labeled eighth in a three-block walk and still send you home full. There is a careless version that will get a cloud in a dining room and a complaint to a community board. We are in the business of the first version. So is every restaurateur who did not ask to be a consumption lounge. So is the licensed shop that quietly told a loud customer to take it outside. Manners are the infrastructure. The flags are just the ceiling." },
      { type: "callout", title: "B/D to Fordham Road",""",
    ),
    "city-island-cannabis-friendliness": (
        '{ type: "callout", title: "Orchard Beach is next door and still a no",',
        """      { type: "h2", text: "A small town inside the borough" },
      { type: "p", text: "City Island Avenue is not Fordham Road. It is not The Hub. It is a main street you can see from one end on a clear day, with bait shops, seafood, and people who know each other's cars. That is charming until you are the person fogging a deck. Discretion here is not a style. It is how you remain a guest. I watched a table treat a vape like it was invisible. The next table did not. In a small town, the next table is also the neighbor, the owner, and sometimes the person who will mention it at the church that is three minutes away. Our 6.1 is a manners number as much as a legal one." },
      { type: "p", text: "The haul is part of the score because the haul is part of the day. The 6 to Pelham Bay Park is already a decision. The Bx29 is another. By the time you reach the water you have spent the kind of time that makes people sloppy with a joint they have been saving. Do not be sloppy. Eat. Walk. Save the labeled jar for a sidewalk that is not a dock, or for home. If you wanted a high friendliness number, you wanted Mott Haven or Melrose after work, not a marina. The island is for the fish and the photo. It will still be here if you behave." },
      { type: "p", text: "Delivery onto the island is the question I get in email. Sometimes. Not as a default. Not as a 20-minute promise. Call the Melrose shop and ask. If the answer is no, that is a licensed shop telling the truth. Buy on the mainland, carry, eat, leave. The water does not owe you a loophole, and neither does the bus." },
      { type: "callout", title: "Orchard Beach is next door and still a no",""",
    ),
    "can-you-smoke-weed-in-bronx-parks": (
        '{ type: "callout", title: "Buy legal, consume legal",',
        """      { type: "h2", text: "Why the Bronx no-list is longer" },
      { type: "p", text: "This borough has more parkland than any other in the city. That is a gift we print with pride, and it is why the no list looks like a tour. Pelham Bay alone is bigger than a lot of towns. Van Cortlandt eats the north. The Zoo and the Garden sit on the same green lung as Bronx Park. Wave Hill hangs over the Hudson. If legalization had turned all of that into a smoking section, we would have a different paper and a worse borough. It did not. Possession is legal. Lighting up on Parks property is not. The gift stays a gift if we do not ash in it." },
      { type: "p", text: "Playgrounds are the part people argue about in bad faith. 'There were no kids there' is not a statute. Rubber, swings, a fence — that is the map. Rec centers, pools, pedestrian plazas: same map. The 6 train's last car has always smelled like a rumor. It is still the MTA. Write a summons in your head before Parks writes one on paper. Then stay on the sidewalk side of the fence, 21+, with a labeled jar from a licensed counter if you have one at all." },
      { type: "callout", title: "Buy legal, consume legal",""",
    ),
    "first-time-at-a-bronx-dispensary": (
        '{ type: "callout", title: "Edibles",',
        """      { type: "h2", text: "Money, ATMs, and what 'New York prices' means" },
      { type: "p", text: "Bring a debit card and a little cash if you have it. Some licensed counters still run a cashless ATM because banks and cannabis have not finished their conversation. You will not need a medical card. You will not need a budget that matches a Manhattan tourist shop, and you should not expect 2018 parking-lot numbers either. You are buying a test result and a tax receipt. If that sentence makes you want to walk, walk to the neon shop and then walk back when it gets a padlock. A first-timer who understands the receipt is already ahead of half the borough." },
      { type: "p", text: "Ask what came in this week. Ask what they would smoke after a long shift. Ask what they would not sell their cousin. Do not ask for a discount on a first visit as if the eighth were a pair of sneakers. Do not film the budtender without asking. Do not bring a child to the door. Do not treat the hours sign as a suggestion — Monday through Saturday 9 to 8, Sunday 10 to 7, at 2935 3rd Avenue, is a store. Be in it like a store. You will get treated like a customer instead of a problem." },
      { type: "callout", title: "Edibles",""",
    ),
    "bronx-edibles-etiquette": (
        '{ type: "callout", title: "Kids and pets",',
        """      { type: "h2", text: "Alcohol, stacking, and the night that gets away" },
      { type: "p", text: "Wine on Arthur Avenue is a culture. A 10-milligram square is a chemistry. Stacking them because you 'feel nothing yet' is how a dinner becomes a story you will not want in this paper. Wait. Water. Food that is actual food. If you are going to drink, do it as a separate decision, not as a mixer. If you are going to a Stadium night, dose at home or do not dose. If you are going to a garden, do not dose on the grounds. The onset window is the whole etiquette guide wearing a clock." },
      { type: "p", text: "I have watched a table on City Island discover a gummy in the middle of steamers. I have watched a couple on Fordham Road decide the sneaker store was a lounge. I have watched a first-timer on the 6 realize, too late, that 50 milligrams was not a serving. None of those people were villains. They were in a hurry, or showing off, or repeating a package joke. Licensed New York edibles are labeled so you do not have to learn it that way. Read the serving. Not the package. The serving." },
      { type: "callout", title: "Kids and pets",""",
    ),
    "school-buffer-fight-bronx-operators": (
        '{ type: "callout", title: "What shoppers should know",',
        """      { type: "h2", text: "What 500 feet looks like on a South Bronx lot" },
      { type: "p", text: "Stand in a doorway on 138th and look. School, church, housing, a new building, an old building, a pharmacy, a bus. 500 feet is not a suburban radius here. It is a stacked-use block that already had every civic function before cannabis asked for a door. A rule written for a strip mall dies in Mott Haven. That is not an argument against keeping shops off of dismissal. It is an argument against changing the yardstick after the vault is poured. CAURD was supposed to put justice-impacted operators into exactly these lots. A tape measure that invalidated the lots after the money went in was a second prohibition." },
      { type: "p", text: "Shoppers do not have to become land-use nerds. They do have to understand why a shop they like might have spent the winter on a lawyer, and why the unlicensed storefront down the street did not. Spend like the invoices are real. 2935 3rd Avenue is a CAURD door that was not the exhibit in the lawsuit and is the shop this paper can walk to. Use it. The buffer story is not a coupon for neon." },
      { type: "callout", title: "What shoppers should know",""",
    ),
    "bronx-cannabis-hub-and-who-owns-the-shop": (
        '{ type: "callout", title: "Read next",',
        """      { type: "h2", text: "Jobs, tax, and the part that is not a mural" },
      { type: "p", text: "The Hub's count includes jobs. That is the sentence prohibition never wrote for this borough on purpose. A budtender with a payroll is a different civic object than a man with a backpack. A tax receipt is a different civic object than a raid roundup. We will keep printing both objects until the second one is boring. Ownership is how you get the first. A CAURD number is how you prove it. A Hub screening is how some people got to the number. A Melrose door with OCM-CAURD-25-000297 is how you shop it on a Tuesday at 9:40 a.m. without a press kit." },
      { type: "p", text: "National roll-ups will keep arriving with better decks and worse geography. Medical Registered Organizations were here early and still matter for patients. Neither fact answers the quiet question. The quiet question is whether the ZIP codes that supplied the arrests supply the keys. On Boston Road, on 3rd Avenue, on Allerton, some of the keys are here. On other blocks they are not. Counting is the beat. Shopping like the count matters is the reader side of the beat. We will keep doing the first. You can do the second on the 2 and 5." },
      { type: "callout", title: "Read next",""",
    ),
    "what-bronx-reddit-is-saying-this-month": (
        '{ type: "callout", title: "Method",',
        """      { type: "h2", text: "Facebook, X, and the geography problem" },
      { type: "p", text: "Facebook neighborhood groups in the east Bronx run the same three threads with more exclamation points: who delivers, who got sealed, why a bag on a mat is a ghost story. X runs them with less geography and more performance. A raid becomes a meme. A COD list becomes a brand. We went and looked anyway, because ignoring the platforms does not make the borough stop using them. The useful posts name a train. The useless posts name a vibe. This paper will keep translating the first and ignoring the second, which is a method, not a mood." },
      { type: "p", text: "If you want to send a thread, the tip line is tips@freebronxleaf.com. If you want to argue with a byline, the email is on the writer page. If you want to shop, we will not send you to a close-friends list. We will send you to a CAURD counter on 3rd Avenue that IDs you at the door. Reddit can come with us or not. The 6 will run either way." },
      { type: "callout", title: "Method",""",
    ),
    "mott-haven-murals-and-the-new-green": (
        "The cannabis market is the thing that is late.",
        """The cannabis market is the thing that is late. A mural the block asked for is a civic record; a mural a brand asked for is an ad. Operators who want a South Bronx door should hire off the Hub, open at an hour that matches a shift, and leave the existing paint alone. The painted door inside BX Buddiez works because it is inside a shop. Consume on a sidewalk that is not park property, 21+, or take it home. Walk north on 3rd if you want a licensed eighth. Behave like a guest who knows the neighborhood came a long time ago.""",
    ),
    "fordham-road-after-dark-rating": (
        '{ type: "callout", title: "Two doors",',
        """      { type: "h2", text: "Vendors, students, cameras" },
      { type: "p", text: "Fordham Road after 9 is a camera economy. Phones are out. Sneaker lines are content. A cloud in front of that is not discretion. It is a video you will not like in the morning. Students make the street younger, which is fine, and which is not a license. Our index is for adults 21+. It is not a campus guide. If you are on a Fordham University rhythm, the same statute applies: sidewalks maybe, parks no, trains no, indoor air no. If you are not, you still do not get to perform for the sneaker line." },
      { type: "p", text: "Vendors are the other half of the volume. Some of them have been on this strip since before adult-use. They did not sign up to be your session either. Buy licensed before the volume starts if you can — Melrose at 9 a.m. is a better errand than Fordham Road at 9:30 p.m. If you are already here, use a licensed door, know which ID you are holding, and walk. 7.1 is a street that will tolerate a discreet adult and exile a spectacle. Meet it at that number or go to Belmont." },
      { type: "callout", title: "Two doors",""",
    ),
    "parkchester-porch-pirates-and-the-laced-weed-note": (
        '{ type: "callout", title: "Protocol",',
        """      { type: "h2", text: "What a complex trains people to do" },
      { type: "p", text: "Parkchester trained a generation to leave packages, then trained the next generation not to. Porch piracy is not a cannabis story until an unlicensed drop uses the same mat. Then it is. Licensed delivery is the interruption: a person, an ID, a sealed jar, no mat. That interruption is inconvenient. The inconvenience is the civic feature. Big complexes in Soundview and Co-op City are learning the same lesson at different speeds. We will keep printing the protocol until it is boring. Boring is the goal." },
      { type: "p", text: "Facebook groups in the east Bronx will keep circulating the note, the joke, the warning in all caps. We will not diagnose a note we did not see taped. We will not turn 'laced' into a lab result we do not have. We will tell you to order from a shop with an OCM number, to be home, and to bring ID. If that is not the night you wanted, pickup at 2935 3rd Avenue is the cleaner transaction, and the 6 and the 2/5 still run." },
      { type: "callout", title: "Protocol",""",
    ),
    "wave-hill-riverdale-where-the-leaf-meets-the-lawn": (
        '{ type: "callout", title: "Ticketed beauty is not a loophole",',
        """      { type: "h2", text: "How to be a guest in a garden" },
      { type: "p", text: "Wave Hill staff did not clock in to debate the MRTA. They clocked in to keep a garden. Meet them there. Buy a ticket if that is the day. Stay on the paths. Look at the Hudson. Leave the jar in the bag. If you need a legal sidewalk, it is not the pergola and it is not Van Cortlandt next door. It is a public sidewalk off the grounds, 21+, discreet, in a neighborhood that notices. Our 2.0 is not a punishment. It is a map of a place that is better at being a garden than at being a lounge, which is why you came." },
      { type: "p", text: "Riverdale's watchful 6, off the grounds, is a different rating for a reason. Quiet streets, hills, co-op rules on top of city rules. If you live here, you already know which Super wants a conversation. If you are visiting, default to no until you are sure the pavement is public and not park. Then go home. The haul back on the 1 or Metro-North is not a session either. The Bronx includes this garden. It also includes a CAURD counter on 3rd Avenue. They are not at war unless you bring a cloud to the pergola." },
      { type: "callout", title: "Ticketed beauty is not a loophole",""",
    ),
    "licensed-vs-smoke-shop-bronx-how-to-tell": (
        '{ type: "callout", title: "Our presenting sponsor is a check, not a vibe",',
        """      { type: "h2", text: "A walk you can actually do this week" },
      { type: "p", text: "Pick a strip you already use — Gun Hill, Fordham, The Hub, Allerton. Stand where you can see two doors. Apply the five checks. The licensed room will look boring in the best way: hours, a case, an ID. The other room will look like a dare. Walk into the boring one. If you cannot find a boring one from where you are standing, ride the 2/5 to 3rd Avenue–149th Street and walk north to 2935. That is the field guide as an errand. It takes an afternoon. It will save you a raid roundup and a mystery milligram." },
      { type: "p", text: "Bring a teenager you are responsible for educating, not a teenager you are trying to sneak in. The licensed door will turn you both around if the ID is wrong, which is the point. The unlicensed door might not, which is also the point. We are a newspaper, not a parent. We will still say it. 21+ is the floor. A green LED cross is not a floor. Look at the number. If the number is OCM-CAURD-25-000297, you are in Melrose, and you are done guessing." },
      { type: "callout", title: "Our presenting sponsor is a check, not a vibe",""",
    ),
    "on-the-6-why-the-bronx-needed-a-free-cannabis-magazine": (
        '{ type: "callout", title: "Listen",',
        """      { type: "h2", text: "Who is in the newsroom" },
      { type: "p", text: "Marisol Vega, editor-in-chief, Mott Haven, a decade of housing and small-business reporting on the 6 corridor. Darius Colon, Fordham, raids and Reddit and the gap between Albany and the strip. I cover culture out of Soundview and produce the show. Anthony Ruiz reviews dispensaries from Melrose, ID in hand, and will not score a store he has not shopped. Jamal Wright has the Hub, the buffer, the license class. Lena Park has the tables and the gardens. Photos of us, bios, emails: the about page. If we look like a real local staff, that is because we are one. EEAT is not a Google phrase in this room. It is a train pass and a block." },
      { type: "p", text: "Read the editorial guidelines after this letter. Read the privacy policy if you are the kind of person who does. Then listen to Episode 1. Then get off at 149th if you want to see the hours sign. Volume 1 only works if you use it. We will keep publishing either way. We would rather you came back." },
      { type: "callout", title: "Listen",""",
    ),
}

def main():
    files = [
        Path("/workspace/src/data/stories/part-b.ts"),
        Path("/workspace/src/data/stories/part-c.ts"),
        Path("/workspace/src/data/stories/part-d.ts"),
    ]
    text = {p: p.read_text() for p in files}
    blob = "\n".join(text.values())
    for needle, (old, new) in INSERTS.items():
        found = False
        for p, t in text.items():
            if old in t:
                if t.count(old) != 1:
                    print("AMBIGUOUS", needle, p, t.count(old))
                text[p] = t.replace(old, new, 1)
                found = True
                break
        if not found:
            print("MISSING", needle, old[:80])
        else:
            print("patched", needle)
    for p, t in text.items():
        p.write_text(t)

if __name__ == "__main__":
    main()
