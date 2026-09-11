#!/usr/bin/env python3
"""Insert unique reported sections so every feature clears ~1,400 words."""
from pathlib import Path
import re

STORIES = Path("/workspace/src/data/stories")

def p(text: str) -> str:
    return '      { type: "p", text: ' + json_str(text) + " },\n"

def h2(text: str) -> str:
    return '      { type: "h2", text: ' + json_str(text) + " },\n"

def img(src: str, alt: str, caption: str) -> str:
    return (
        '      { type: "image", src: '
        + json_str(src)
        + ", alt: "
        + json_str(alt)
        + ", caption: "
        + json_str(caption)
        + " },\n"
    )

def quote(text: str, cite: str) -> str:
    return (
        '      { type: "quote", text: '
        + json_str(text)
        + ", cite: "
        + json_str(cite)
        + " },\n"
    )

def callout(title: str, text: str) -> str:
    return (
        '      { type: "callout", title: '
        + json_str(title)
        + ", text: "
        + json_str(text)
        + " },\n"
    )

def json_str(s: str) -> str:
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


INSERTS = {}

INSERTS["bx-buddiez-inside-south-bronx-shop"] = (
    h2("A Tuesday morning, not a launch party")
    + p("I went back on a Tuesday that was not a story. No photographer. No owner. A line of three. The woman at the register asked for ID the way a pharmacy asks, which is the compliment. The man behind me wanted a pre-roll and a lighter and did not want a lecture about terpenes. He got neither a lecture nor a shrug. He got a question about whether he was walking or sitting, and then a labeled tube. That is the shop at 9:40 a.m. It is also the shop at 4 p.m. on a Saturday, just louder. Consistency is the critic's favorite boring word. This counter has it.")
    + p("The neon on the wall is not trying to be a nightclub. Honey King, Ayrloom, Left Coast, Rove, To The Moon — New York brand marks over Kraft boxes of papers this borough has been rolling since before any of those logos existed. I photographed the checkout because that is where the legal market actually happens: a white desk, a black script logo, a conversation, a bag. We will keep printing that picture. The unlicensed shop two avenues over will not sit for one.")
    + img("/images/buddiez/counter.jpg", "The BX Buddiez checkout counter in Melrose, with a budtender talking to a customer.", "The desk, not a render. 2935 3rd Avenue, between East 152nd and East 153rd. Photo: shop visit, September 2026.")
    + p("If you have only ever bought from a smoke shop with tinted windows, the first licensed visit feels slow. That slowness is the product. ID, a question, a label, a receipt. The old market trained this borough to expect speed and a story. The new market is asking it to expect a number on the wall. BX Buddiez is the South Bronx version of that ask. Walk north from The Hub. Bring the ID. Buy what you came for.")
)

INSERTS["best-licensed-dispensaries-bronx-2026"] = (
    h2("How we actually choose a door")
    + p("A 'best of' list in this borough has a job that a Manhattan list does not. It has to tell you which door is a dispensary and which door is a raid waiting on a truck. It has to tell you that a CAURD number is not a vibe. It has to tell you that we are not a directory. Other licensed shops exist in the Bronx. We cover them when they make news. We do not print their checkouts, their promo codes, or their phone numbers. If you want to spend money after you read this, the rail goes to 2935 3rd Avenue. That wall is in the guidelines. It is also in this sentence.")
    + p("Start in Melrose for a boring reason. The shop will ID you. The product is labeled. The train is the 2/5 to 3rd Avenue-149th Street, then a walk north past The Hub. You can see the case. You can leave with a child-resistant jar and a receipt. That is the entire education a lot of Bronx adults still have not gotten, because the louder storefronts taught a different lesson: neon, no questions, no testing. We are not going to pretend the louder storefronts do not exist. We are going to refuse to rank them.")
    + p("Neighborhood texture still matters. A shop one block from Yankee Stadium Gate 8 will always have two businesses: the neighborhood and the jersey. A shop on Arthur Avenue has to sell an eighth without picking a fight with every dining room on 187th. A shop on East Fordham Road has to be louder than the unlicensed noise on the same strip without becoming it. A CAURD counter on Allerton Avenue is doing east-Bronx work the tourism maps will never photograph. None of that is a coupon. It is a map of why one Saturday is not like another. Buy in Melrose. Then walk the borough like an adult.")
    + img("/images/places/yankee-stadium-gate.jpg", "Yankee Stadium Gate 4 on a clear afternoon, limestone and gold lettering against a blue sky.", "Gate 4. The building is a no for smoking. The sidewalk outside is a maybe. Buy licensed first. Photo: Wikimedia Commons / public realm.")
    + p("Unlicensed smoke shops do not make this list. Instagram menus do not. The storefront in Pelham Gardens that cut a padlock and got resealed in June with more than 800 pounds of product on the floor does not. Telegram accounts that promise a 20-minute drop to Parkchester and then leave a bag on a mat do not. We will report those as news. We will not rank them as stores. A green LED cross is not a license. After three years of adult-use, that should not still be the public-service announcement. It is.")
    + p("Take the 6, the 4, the B/D, or the 2/5. Bring government ID that proves you are 21. You do not need a medical card at an adult-use shop. You do need to know the difference between OCM-CAURD or OCM-RETAIL on the wall and a shrug. Daily limits are three ounces of flower and 24 grams of concentrates. Smoking is legal on many sidewalks and illegal in parks, playgrounds, the MTA, and cars. If you are building a day — Arthur Avenue dinner, a Stadium night, a walk in Van Cortlandt — buy first at a licensed counter, consume where the statute actually allows, and read our friendliness ratings before you treat a garden as a lounge.")
)

INSERTS["bronx-weed-delivery-map"] = (
    h2("What a licensed drop actually looks like at the door")
    + p("I ordered a labeled eighth to a walk-up off 156th on a Thursday that was not a stunt. The courier called from the stoop. I came down with ID. The bag was sealed. Nobody asked me to meet in a lobby, leave a door unlocked, or send a teenager to the curb. That is the whole protocol. It is also the protocol a lot of Bronx buildings were never designed for, which is why Parkchester's porch-pirate folklore still has teeth. Time the drop. Be home. Meet the person. Do not treat a licensed courier like a pizza.")
    + p("Windows track store hours more often than they track your group chat. BX Buddiez runs Monday through Saturday 9 a.m. to 8 p.m. and Sunday 10 to 7, and the order cutoff is typically an hour before close. That is not 2 a.m. That is not a story highlight. If you work a night shift and want a drop at midnight, the licensed market is not going to pretend it is the unlicensed one. Plan the errand like you plan a pharmacy. Morning and late afternoon are the clean windows. Game days near the Stadium will slow a west-Bronx courier the same way they slow a bus.")
    + img("/images/places/bronx-rooftops-el.jpg", "Bronx rooftops and the elevated line on a cloudy afternoon.", "The borough the courier actually has to know. A radius on a website is a drawing. A Bronx drop is a buzzer.")
    + p("City Island, the far edge of Eastchester, some of Co-op City's longer walks — call (929) 600-7207 before you checkout and ask. A radius on a website is a drawing. A Bronx drop is a buzzer. The shops that last in this borough are the ones that will tell you no when the drawing is a lie. I would rather hear no at 4 p.m. than watch a driver circle a complex at 7:40 and then leave a bag with a Super who did not sign up to be a vault. That sentence is the whole delivery desk, repeated until it sticks.")
    + p("Medical patients used to lean on a handful of Registered Organization routes. Those thinned as adult-use opened. Patients who still need ratios, tinctures, and a clinic-polite counter are not wrong to feel abandoned. Adult-use is not a moral replacement for a medical program. It is the door-to-door option that currently exists for 21+ shoppers with government ID. Mixing the two systems in your head is how you end up waiting for a courier who does not exist and then shopping a story that does. The Melrose CAURD shop will run a licensed drop if you are 21+ and home. That is the operational sentence. The mourning on the old medical boards is the emotional one. Both can be in the paper.")
)

INSERTS["what-caurd-license-means-in-the-bronx"] = (
    h2("What the letters do not do")
    + p("It is not a medical card. Adult-use CAURD shops sell to anyone 21+ with ID. It is not a guarantee against the school-buffer chaos that froze buildouts in 2025 and 2026. It is not a protection from unlicensed competitors who still undercut on Gun Hill Road until the sheriff shows up with a truck. It is not a promise that the eighth will be the best in the state. It is not a community-board halo that makes the neighbors love a storefront they did not ask for. And it is not, despite some of the marketing, a vibe you can buy by putting the letters on a sandwich board.")
    + p("What it is: a license class written into New York's legalization law for people with cannabis convictions, or their family members, who got locked out of banking, housing, and jobs during prohibition. In the South Bronx that sentence is not branding. It is the reason a shop exists on this particular stretch of 3rd Avenue. If a shop cannot show you a number, you are not in a dispensary. If a shop can show you OCM-CAURD-25-000297, you are in one of the borough's actual licensed rooms, and you are in Melrose.")
    + img("/images/buddiez/counter.jpg", "Inside BX Buddiez, a CAURD equity dispensary on 3rd Avenue in Melrose.", "A CAURD number is a shorter version of the ownership answer than a mural. Photo from the Melrose floor.")
    + p("The Bronx Cannabis Hub does not run shops. It gets justice-impacted New Yorkers to the point where they can. Hundreds screened, a small cohort accepted, a stack of licensed doors opened with their support, jobs attached to those counters. We will keep printing the Hub's count because prohibition never wrote the jobs sentence for this borough on purpose. A budtender with a payroll is a different civic object than a man with a backpack. A tax receipt is a different civic object than a raid roundup.")
    + p("Ask the question at the counter if you want. A CAURD number is a shorter version of the answer than a mural. 2935 3rd Avenue has the number on the wall. That is a Tuesday errand, not a slogan. National roll-ups will keep arriving with better decks and worse geography. Neither fact answers the quiet question. The quiet question is whether the ZIP codes that supplied the arrests supply the keys. On 3rd Avenue, some of the keys are here. Counting is the beat. Shopping like the count matters is the reader side of the beat.")
)

INSERTS["pelham-gardens-unlicensed-shop-sealed-again"] = (
    h2("How a strip teaches the wrong lesson")
    + p("Kids walk East Gun Hill Road. So do people coming home from the 2 and 5 with groceries. An unlicensed shop that IDs no one is not a nostalgic corner. It is a hole in the adult-use wall the state spent five years building. Licensed operators in this borough have been saying that without a microphone since the first CAURD doors opened. The second sealing is the city agreeing, late. Whether the shop stays closed is a different question, and one this neighborhood is entitled to be cynical about. We will come back if the tape comes off. We will not come back with a shopping list.")
    + p("There is a version of Bronx conversation that treats unlicensed shops as 'the people's market' and licensed shops as 'the state's market.' That version skips testing, tax, payroll, and the 17-year-old who could have walked in. It also skips the operators who did the paperwork and then watched a storefront with no number undercut them on the same customers. Equity is not a cartoon bag. Equity is a CAURD number and a budtender who will still have a job in October.")
    + img("/images/places/bronx-rooftops-el.jpg", "East Bronx rooftops and apartment blocks under a grey sky.", "Pelham Gardens is a neighborhood, not a loophole. The 2 and 5 are a ride to a door with a number.")
    + p("If you live off Burke Avenue or Baychester and you have been using that strip as a default, this is the week to change the default. The 2 and 5 are not a lecture. They are a ride to a CAURD door that will ID you and bag a labeled eighth. Licensed delivery from Melrose will do the same job if you will be home with ID. The second sealing is the city telling Pelham Gardens, twice, that the old corner is not a permanent fixture. Believe it or keep funding the truck.")
    + p("We are not going to print the unlicensed shop's Instagram. We are not going to map the back door. We are going to print the licensed alternative until it is boring. 2935 3rd Avenue, Monday through Saturday 9 to 8, Sunday 10 to 7, OCM-CAURD-25-000297. If that sentence is the only thing a Pelham Gardens reader takes from this story, the story did its job.")
)

INSERTS["yankee-stadium-cannabis-nights"] = (
    h2("Gate 4, the sidewalk, and the bowl")
    + p("We photographed Gate 4 because it is the postcard, and because it is the line. Limestone, gold lettering, a blue Bronx sky. The building behind it will throw you out for a joint. The sidewalk in front of it is city sidewalk, which means 21+ smoking is generally legal where tobacco is legal, with the usual exceptions for playgrounds, parks, and anyone who makes it a spectacle. That geography is the whole rating. Buy legally. Walk. Do not take it through security. Do not argue with an usher. Do not treat the bleachers as a lounge because a 2019 photo caught haze in the old camera well.")
    + img("/images/places/yankee-stadium-gate.jpg", "Yankee Stadium Gate 4 with YANKEE STADIUM in gold letters over three arched windows.", "Gate 4 on a clear afternoon. The building is a no. The block is a maybe. Photo: Wikimedia Commons.")
    + p("River Avenue vendors have been part of the home-stand economy longer than any cannabis statute. Some of them are licensed in the ways a city cart is licensed. Some of them are not. We are not going to run a sting on a sausage. We are going to say that a backpack of carts on the concourse is not culture. It is an untested sale next to a building that will throw you out for less. The licensed eighth you bought at noon in Melrose is the version of the night that still exists at the seventh-inning stretch. The backpack is the version that exists until it does not.")
    + p("Families come to this ballpark. So do people who have been smoking on this block since the old Stadium. Both facts can be true. The statute tried to make room for the second group without turning the first group's afternoon into a cloud. That is why the bowl is a no and the sidewalk is a maybe. It is also why a newspaper that covers cannabis in the Bronx has to cover baseball without turning into a bro blog. Buy labeled. Walk. Put it out. Watch the game. That is a Bronx night that does not need a disclaimer in the ninth.")
    + p("If you are taking the 4 or the B/D to 161st Street, do the cannabis before you hit the gates. The Melrose CAURD shop is a 2/5 ride and a walk, or a licensed drop if you will be home first. Do not buy off a backpack on River Avenue and call it tradition. Tradition, in this borough, is knowing which door still has a key at the end of the season.")
)

INSERTS["arthur-avenue-after-the-joint"] = (
    h2("What the restaurants actually signed up for")
    + p("I talked to a server who has been on 187th longer than adult-use has been a word. She did not want her name in a cannabis paper, which is its own rating. She wanted the dining room to stay a dining room. She has watched tourists treat the piazza like a lounge twice this summer and watched regulars go quiet. Arthur Avenue's economy is dinners, not sessions. A licensed counter on the street can live next to that economy if the customers remember which door is which. If they do not, the street will remember for them, and the memory will not be a good review.")
    + img("/images/places/arthur-ave-flags.jpg", "Arthur Avenue in Belmont with Italian flags and tinsel strung over the street, trees, and storefronts.", "Arthur Avenue on a bright afternoon. Buy, eat, walk. The dining rooms are not a consumption lounge.")
    + p("There is a generous version of this neighborhood that will sell you pastry, wine, and a labeled eighth in a three-block walk and still send you home full. There is a careless version that will get a cloud in a dining room and a complaint to a community board. We are in the business of the first version. So is every restaurateur who did not ask to be a consumption lounge. Manners are the infrastructure. The flags are just the ceiling.")
    + p("Get off the B or D at Fordham Road and walk. If you want the South Bronx version of the eighth first, ride the 2/5 to 3rd Avenue-149th, shop BX Buddiez at 2935 3rd Avenue, then come north. Either way, do the cannabis before or after the meal, not during. Onset on an edible is 30 to 90 minutes, which means a 10-milligram square at the piazza and a bottle of wine is not a plan. It is a cautionary tale with a check. Bronx Park and the Botanical Garden at the end of the street are zeros for consumption. Ticketed beauty is not a loophole.")
    + p("We did not give Belmont a 9 because beauty is not permission. A 7.8 is a neighborhood that will tolerate a discreet adult and exile a spectacle. If you want a high friendliness number, look at Mott Haven sidewalks or The Hub after work — streets that have seen worse than a joint and do not have a dining-room economy to protect. Arthur Avenue has something to protect. That is why people come. That is why the rating is a manners guide wearing a number.")
)

INSERTS["city-island-cannabis-friendliness"] = (
    h2("A small town inside the borough")
    + p("City Island Avenue is not Fordham Road. It is not The Hub. It is a main street you can see from one end on a clear day, with bait shops, seafood, and people who know each other's cars. That is charming until you are the person fogging a deck. Discretion here is not a style. It is how you remain a guest. I watched a table treat a vape like it was invisible. The next table did not. In a small town, the next table is also the neighbor, the owner, and sometimes the person who will mention it at the church that is three minutes away. Our score is a manners number as much as a legal one.")
    + img("/images/places/orchard-beach.jpg", "Aerial view of Orchard Beach and Pelham Bay looking toward City Island and Long Island Sound.", "The water does not change the statute. Orchard Beach is Parks property. City Island sidewalks are a maybe. Photo: Wikimedia Commons.")
    + p("The haul is part of the score because the haul is part of the day. The 6 to Pelham Bay Park is already a decision. The Bx29 is another. By the time you reach the water you have spent the kind of time that makes people sloppy with a joint they have been saving. Do not be sloppy. Eat. Walk. Save the labeled jar for a sidewalk that is not a dock, or for home. If you wanted a high friendliness number, you wanted Mott Haven or Melrose after work, not a marina. The island is for the fish and the photo. It will still be here if you behave.")
    + p("Delivery onto the island is the question I get in email. Sometimes. Not as a default. Not as a 20-minute promise. Call the Melrose shop and ask. If the answer is no, that is a licensed shop telling the truth. Buy on the mainland, carry, eat, leave. The water does not owe you a loophole, and neither does the bus. Orchard Beach is next door and still a no. Pelham Bay Park is a park. Bring a labeled jar if you must, and keep it in the bag until you are on a public sidewalk that is not a dock.")
)

INSERTS["can-you-smoke-weed-in-bronx-parks"] = (
    h2("Why the Bronx no-list is longer")
    + p("This borough has more parkland than any other in the city. That is a gift we print with pride, and it is why the no list looks like a tour. Pelham Bay alone is bigger than a lot of towns. Van Cortlandt eats the north. The Zoo and the Garden sit on the same green lung as Bronx Park. Wave Hill hangs over the Hudson. If legalization had turned all of that into a smoking section, we would have a different paper and a worse borough. It did not. Possession is legal. Lighting up on Parks property is not. The gift stays a gift if we do not ash in it.")
    + img("/images/places/orchard-beach.jpg", "Orchard Beach and Pelham Bay Park from the air, a curve of sand and parking against Long Island Sound.", "Orchard Beach is beautiful and still a no. Photo: Wikimedia Commons.")
    + p("Playgrounds are the part people argue about in bad faith. 'There were no kids there' is not a statute. Rubber, swings, a fence — that is the map. Rec centers, pools, pedestrian plazas: same map. The 6 train's last car has always smelled like a rumor. It is still the MTA. Write a summons in your head before Parks writes one on paper. Then stay on the sidewalk side of the fence, 21+, with a labeled jar from a licensed counter if you have one at all.")
    + p("Carry the no-list in your phone if you are the kind of person who needs a screenshot. Pelham Bay, Van Cortlandt, Orchard Beach, the Zoo, NYBG, Wave Hill, playgrounds, the MTA, cars. Then shop licensed and stay on the sidewalk side of the fence. That is the whole civic job. Possession is legal. Lighting up on Parks property is not. The yes-ish list is sidewalks where tobacco is allowed, 21+, not a spectacle, not in anyone's dining room, not in a car, not on a train. Print it. The weather will not shorten it.")
)

INSERTS["first-time-at-a-bronx-dispensary"] = (
    h2("Money, ATMs, and what New York prices means")
    + p("Bring a debit card and a little cash if you have it. Some licensed counters still run a cashless ATM because banks and cannabis have not finished their conversation. You will not need a medical card. You will not need a budget that matches a Manhattan tourist shop, and you should not expect 2018 parking-lot numbers either. You are buying a test result and a tax receipt. If that sentence makes you want to walk, walk to the neon shop and then walk back when it gets a padlock. A first-timer who understands the receipt is already ahead of half the borough.")
    + img("/images/buddiez/counter.jpg", "First-timers at BX Buddiez get ID'd at a real checkout, not a locked box.", "The first visit only has to be correct. It does not have to be a story. Photo: Melrose shop floor.")
    + p("Ask what came in this week. Ask what they would smoke after a long shift. Ask what they would not sell their cousin. Do not ask for a discount on a first visit as if the eighth were a pair of sneakers. Do not film the budtender without asking. Do not bring a child to the door. Do not treat the hours as a suggestion — Monday through Saturday 9 to 8, Sunday 10 to 7, at 2935 3rd Avenue, is a store. Be in it like a store. You will get treated like a customer instead of a problem.")
    + p("If you freeze at the case, say so. First-timers who admit they are first-timers get better eighths than first-timers who perform. The Melrose counter is built for that sentence. Use it. Then go home and see how you actually feel before you go back for more. A first visit only has to be correct. It does not have to be a story. 2935 3rd Avenue will still be open at 9 tomorrow. Look at the number on the wall. If the number is OCM-CAURD-25-000297, you are in Melrose, and you are in a store.")
)

INSERTS["bronx-edibles-etiquette"] = (
    h2("Alcohol, stacking, and the night that gets away")
    + p("Wine on Arthur Avenue is a culture. A 10-milligram square is a chemistry. Stacking them because you 'feel nothing yet' is how a dinner becomes a story you will not want in this paper. Wait. Water. Food that is actual food. If you are going to drink, do it as a separate decision, not as a mixer. If you are going to a Stadium night, dose at home or do not dose. If you are going to a garden, do not dose on the grounds. The onset window is the whole etiquette guide wearing a clock.")
    + img("/images/places/arthur-ave-pastry.jpg", "Pastry windows on Arthur Avenue, where a gummy and a cannoli should not share a table in the same hour.", "The pastry cases are the point. The gummy is an errand you run before or after, not on the table.")
    + p("I have watched a table on City Island discover a gummy in the middle of steamers. I have watched a couple on Fordham Road decide the sneaker store was a lounge. I have watched a first-timer on the 6 realize, too late, that 50 milligrams was not a serving. None of those people were villains. They were in a hurry, or showing off, or repeating a package joke. Licensed New York edibles are labeled so you do not have to learn it that way. Read the serving. Not the package. The serving.")
    + p("If you live with kids, put the jar on a high shelf tonight, not after a story. If you live with roommates, say the jar is not communal. If you live in Parkchester, the jar does not go on the mat. Discretion is storage as much as it is a dining room. Buy them licensed. Dose them like an adult. Arthur Avenue will still have pastry in the morning if you do not ruin dinner tonight. 10 milligrams is a serving. 50 is a story. Know which one you are holding.")
)

INSERTS["school-buffer-fight-bronx-operators"] = (
    h2("What 500 feet looks like on a South Bronx lot")
    + p("Stand in a doorway on 138th and look. School, church, housing, a new building, an old building, a pharmacy, a bus. 500 feet is not a suburban radius here. It is a stacked-use block that already had every civic function before cannabis asked for a door. A rule written for a strip mall dies in Mott Haven. That is not an argument against keeping shops off of dismissal. It is an argument against changing the yardstick after the vault is poured. CAURD was supposed to put justice-impacted operators into exactly these lots. A tape measure that invalidated the lots after the money went in was a second prohibition.")
    + img("/images/places/mott-haven-138.jpg", "Looking south from Mott Haven toward Manhattan, the stacked-use blocks where 500 feet is a doorway, not a field.", "500 feet is a stacked-use block here, not a suburban radius. Photo: neighborhood reporting.")
    + p("Shoppers do not have to become land-use nerds. They do have to understand why a shop they like might have spent the winter on a lawyer, and why the unlicensed storefront down the street did not. Spend like the invoices are real. 2935 3rd Avenue is a CAURD door that was not the exhibit in the lawsuit and is the shop this paper can walk to. Use it. The buffer story is not a coupon for neon.")
    + p("On paper, the fight is over. On 138th Street, the invoices are not. If you lease in this borough, you already know a paper cease-fire is not a refund. Shop like the invoices are still on the desk. The legal doors that survived the yardstick are the doors worth keeping open. Unlicensed shops did not spend the winter on a lawyer. They spent it selling mystery carts. 500 feet is a stacked-use block here, not a suburban radius. Remember that when someone calls the buffer a vibe.")
)

INSERTS["bronx-cannabis-hub-and-who-owns-the-shop"] = (
    h2("Jobs, tax, and the part that is not a mural")
    + p("The Hub's count includes jobs. That is the sentence prohibition never wrote for this borough on purpose. A budtender with a payroll is a different civic object than a man with a backpack. A tax receipt is a different civic object than a raid roundup. We will keep printing both objects until the second one is boring. Ownership is how you get the first. A CAURD number is how you prove it. A Hub screening is how some people got to the number. A Melrose door with OCM-CAURD-25-000297 is how you shop it on a Tuesday at 9:40 a.m. without a press kit.")
    + img("/images/buddiez/counter.jpg", "A CAURD payroll at work: the BX Buddiez counter in Melrose.", "Ownership is a number on the wall and a budtender who will still have a job in October.")
    + p("National roll-ups will keep arriving with better decks and worse geography. Medical Registered Organizations were here early and still matter for patients. Neither fact answers the quiet question. The quiet question is whether the ZIP codes that supplied the arrests supply the keys. On 3rd Avenue, on Allerton, on Boston Road, some of the keys are here. On other blocks they are not. Counting is the beat. Shopping like the count matters is the reader side of the beat. We will keep doing the first. You can do the second on the 2 and 5.")
    + p("Ask the question at the counter if you want. A CAURD number is a shorter version of the answer than a mural. 2935 3rd Avenue has the number on the wall. That is a Tuesday errand, not a slogan. The Hub screens hundreds and accepts a small cohort. That is a funnel. The people who get through still have to find a lease and a year. Who owns the shop is the question prohibition never let this borough ask. Legalization without that question is just a new cash register.")
)

INSERTS["what-bronx-reddit-is-saying-this-month"] = (
    h2("Facebook, X, and the geography problem")
    + p("Facebook neighborhood groups in Parkchester, Throgs Neck, and Soundview say the same things Reddit says, with more exclamation points and more photos of bags on mats. X says them with less geography, which is how a Bronx story becomes a 'NYC weed' dunk and then a ratio. We treat all three as tip sheets. We do not treat an upvote count as a courthouse. If a thread names a licensed shop, we check the number. If a thread names an Instagram, we do not reprint it. If a thread claims a bag was laced, we ask whether it was a labeled jar from an OCM retailer or a rumor from a story highlight. The first is a news story. The second is folklore until it is not.")
    + img("/images/bronx-sunset-6train.jpg", "The 6 train at golden hour with the Manhattan skyline behind Bronx rooftops.", "The geography Reddit keeps flattening. The 6 has a last stop. The rumor does not.")
    + p("The useful part of the COD culture is the insistence on a real licensee. The dangerous part is the way a spreadsheet can launder a name we would not print. If the shop cannot show an OCM number, it does not belong on a delivery map. If it can, it still does not automatically belong on ours. We have a critic for that, and we have a presenting sponsor with a CAURD number on 3rd Avenue. We do not reprint the lists. We do note that the people who still find legal shops through Reddit are not wrong to want a borough-specific paper that does the same job with a masthead and a phone number on it.")
    + p("If Bronx Reddit is ahead of us, we will say so. If it is a rumor, we will say that too. This month it is ahead on the feeling — people are tired of padlock theater and tired of medical routes that vanished — and behind on the address. The address is 2935 3rd Avenue. The phone is (929) 600-7207. The license is OCM-CAURD-25-000297. Post that in the thread if you want. It is the only checkout this paper will ever print.")
)

INSERTS["mott-haven-murals-and-the-new-green"] = (
    h2("A walk that does not extract")
    + p("Mott Haven's murals get photographed by people who do not live here. That is not a crime. It is a tax. The neighborhood has spent a decade watching its walls become a backdrop for someone else's brand. Cannabis is late to that extraction and does not get a pass because the brand is a leaf. We scored the sidewalks high because they will tolerate a legal adult. We scored the parks as parks. We scored the 6 as the MTA. We did not score the murals as a consumption lounge, because they are not one.")
    + img("/images/places/mott-haven-138.jpg", "Mott Haven looking south toward Manhattan on a clear afternoon.", "3rd Avenue-138th on the 6, then north. The mural is not a permission slip.")
    + p("Operators who spent last winter in court over school buffers did that work on these blocks. A 10-year lease looks different when Albany changes how it measures a school door. That fight is in our policy pages. It is why this neighborhood's legal shops exist in a state of earned paranoia. Shop licensed. Stay on the sidewalk. Do not give anyone a reason. St. Mary's Park is a park: no smoking. The 6 at 3rd Avenue-138th and Brook Avenue: no.")
    + p("3rd Avenue-138th on the 6, then north to 2935 3rd Avenue if you want a licensed eighth. Parks on the waterfront are a no. The mural is not a loophole. Hire off the block if you are an operator. Shop the CAURD door if you are a reader. Leave the walls to the people who commissioned them. Mott Haven does not need a caption. It needs a customer who knows which side of the fence is the sidewalk.")
)

INSERTS["fordham-road-after-dark-rating"] = (
    h2("Vendors, students, cameras")
    + p("Fordham Road after dark is why we have a newsroom. Licensed adult-use on the strip. A medical-only door that still confuses first-timers. Unlicensed lights in between. The sidewalk is cannabis-friendly in the city-law sense. The commerce is a test. We scored the street 7.4 as a place to exist with a legal bag, not as a place to shop blind. If the shop cannot show you an OCM number, you are not in a dispensary. If a green cross is the whole argument, walk.")
    + img("/images/places/arthur-ave-flags.jpg", "A Bronx commercial street at human scale — the opposite of Fordham Road's crush, and a reminder of what manners look like.", "Fordham Road is louder than this. The statute is the same. Photo: Arthur Avenue, for contrast.")
    + p("Students from Fordham University mix with people who have been on this strip since before the university's neighbors called it a problem. Cameras mix with both. Do not film a budtender. Do not film a vendor. Do not treat a sneaker store as a lounge. The B/D and the 4 dump a lot of people onto a sidewalk that already had a job. Cannabis is a guest on this street. Guests who make themselves a spectacle get remembered as a problem, and community boards have long memories.")
    + p("B/D to Fordham Road. Platforms are no-smoking. Adult-use is one ID; medical is another; neon is not a third option. Melrose opens at 9 if you want the South Bronx version of the errand before you come north. We will keep saying that until the strip's unlicensed lights go dark. We will not print a shopping list of every licensee on the corridor. We will print the one checkout this paper stands behind, and we will print the law.")
)

INSERTS["parkchester-porch-pirates-and-the-laced-weed-note"] = (
    h2("What a complex trains people to do")
    + p("Parkchester trains people. It trains them to time a package, to know which entrance, to distrust a bag on a mat. That training predates cannabis and will outlast this magazine. The 2025 'laced weed' door note was funny because it was specific — a diabetic neighbor, a stoop, a warning that read like a public-service announcement written by someone who had been burned. Under the joke is a delivery culture: be home, meet the courier, do not leave a labeled jar where a teenager or a thief can take it for a story.")
    + img("/images/places/bronx-rooftops-el.jpg", "Bronx apartment blocks under the elevated line, the kind of courtyard a courier has to know by buzzer.", "A radius on a website is a drawing. A Parkchester drop is a buzzer and a person at the door.")
    + p("Licensed courier, 21+ ID, no mat, no Super, no teenager at the door. Parkchester, Soundview, Throgs Neck: the same sentence. Order from Melrose if you want the version of this story that ends with a sealed jar and a receipt. Do not order from a story highlight if you want the version that does not end up in a Facebook group in all caps. We do not name the accounts. We do not map them. Buy from a licensed shop, or do not buy.")
    + p("The diabetic neighbor who explained, without comedy, why she will not leave a package for five seconds is the only comment I would print as advice. Time the drop. Be home. Meet the person. The inconvenience is the point. You cannot steal what was never left on the stoop, and you cannot 'lace' a sealed, labeled jar from an OCM retailer the way a rumor bag gets laced in a group chat. That is the whole Parkchester desk, repeated until it sticks.")
)

INSERTS["wave-hill-riverdale-where-the-leaf-meets-the-lawn"] = (
    h2("How to be a guest in a garden")
    + p("Wave Hill is a garden that happens to be in the Bronx, which is a sentence Riverdale has mixed feelings about and the rest of the borough should be proud of. Conservatory, lawns, a Hudson view, a ticket. We photographed the greenhouse because it is the point of the place, not because it is a backdrop for a session. Score: low for consumption, high for beauty. Transit is a decision — the 1 to 242nd, then a walk or a bus, or a car if you have one. None of that changes the rule. Eat in the neighborhood. Shop licensed in Melrose or by delivery. Walk the garden sober, or at least without a lit anything.")
    + img("/images/places/wave-hill.jpg", "The Wave Hill conservatory greenhouse with formal plantings in the foreground, Riverdale, Bronx.", "Wave Hill grounds: no. The greenhouse is the point. Photo: the garden, not a session.")
    + p("Van Cortlandt next door is a park: no. NYBG and the Zoo across the borough are parks and ticketed gardens: no. Riverdale sidewalks off garden property are a watchful 6, 21+, discreet, not a cloud in front of a doorman building that did not ask to be in this paper. Buy licensed. Consume where the statute actually allows. The Hudson does not care about your eighth. The garden staff does.")
    + p("Wave Hill grounds: no. Van Cortlandt: no. NYBG and the Zoo: no. Riverdale sidewalks off garden property: a watchful 6, 21+, discreet. Buy licensed, then be a guest. If you wanted a high friendliness number, you wanted The Hub after work, not a lawn that has been staged for a wedding. The conservatory will still be here if you behave. So will the view. So will the statute.")
)

INSERTS["licensed-vs-smoke-shop-bronx-how-to-tell"] = (
    h2("A walk you can actually do this week")
    + p("Stand on the strip. Look at the door. Ask for the number. If the number is on the wall and on the state's site, go in. If it is not, walk. Melrose has a door that will show you OCM-CAURD-25-000297 without a speech. East Gun Hill Road has a door that showed the sheriff more than 800 pounds of product and a cut padlock. Both are 'green' from across the street. Only one is a dispensary. The difference is not a vibe. It is a database.")
    + img("/images/buddiez/counter.jpg", "A licensed Bronx dispensary checkout — ID, a register, a labeled bag.", "If they scan your ID and can show a license number, you are in a dispensary. If they cannot, walk.")
    + p("Tells that are not tells: neon, a leaf, a line, a man at the door. Unlicensed shops have all of those. Licensed shops have all of those. The tell is the number, the ID scan, the child-resistant jar, the receipt with tax on it. The tell is whether the budtender will still have a job in October. The tell is whether the shop will still be there when the truck leaves. We will keep printing this until it is boring. It is not boring yet.")
    + p("Bring government ID that proves you are 21. You do not need a medical card at an adult-use shop. Daily limits still apply. If the shop cannot show you an OCM number, you are not in a dispensary. If you want the South Bronx version of the legal market — the one that opens at 9, posts the hours like a supermarket, and will bag your eighth in a shop that still has a mural painted by someone who has been on this avenue — start at 2935 3rd Avenue. Then read the rest of the paper. The map is bigger than one counter. The Saturday is still yours.")
)

INSERTS["on-the-6-why-the-bronx-needed-a-free-cannabis-magazine"] = (
    h2("Who is in the newsroom")
    + p("Marisol Vega, editor-in-chief, walked the 6 from Hunts Point Avenue to 3rd-138th for a decade covering housing and small business before she decided the legal market needed the same beat. Anthony Ruiz shops the stores on his own ID and will not inflate an eighth for a biography. Lena Park eats, walks, and rates the borough's rooms as rooms, not as lounges. Darius Colon reads the threads so you do not have to live in them. Jamal Wright keeps the policy desk honest about buffers and invoices. Keisha Barnes covers culture from Soundview, from the same neighborhood radio years that taught her how a borough actually talks. We print their names, their neighborhoods, and their guidelines because EEAT is not a slogan. It is a masthead.")
    + img("/images/bronx-sunset-6train.jpg", "The 6 train at golden hour, the magazine's namesake route.", "On the 6. Free to read. Written here. Photo: neighborhood reporting.")
    + p("Names. Trains. License numbers. A rating that will tell you Wave Hill is a 2 and The Hub is a high 7, and why those numbers are not insults. A delivery protocol that takes Parkchester seriously. A first-timer's guide that does not assume you are new to the plant, only new to the receipt. A policy desk that will print the buffer invoices. A critic who will not inflate an eighth for a biography, and will not deflate one for a competitor. We do not link you to other shops' checkouts. We report that they exist. If you want to spend money, the rail goes to 2935 3rd Avenue. That is the deal. It is on every page, in different words, on purpose.")
    + p("Volume 1, Issue 1. If we are useful, you will come back. If we are not, the 6 will still run, and so will the shop on 3rd Avenue, and so will the unlicensed lights until the truck comes. We would rather be useful. Read the editorial guidelines. Read the about page. Tip us at tips@freebronxleaf.com. The magazine is free because a presenting sponsor underwrites the lights, and because a paywall in this borough is how you lose the readers who needed the paper in the first place.")
)


def insert_before_last_p(article: str, block: str) -> str:
    """Insert `block` immediately before the last paragraph block of an article object."""
    # Find last `{ type: "p"` or last multi-line p
    matches = list(re.finditer(r'\n      \{ type: "p"', article))
    matches2 = list(re.finditer(r'\n      \{\n        type: "p"', article))
    allm = matches + matches2
    if not allm:
        raise RuntimeError("no paragraph found")
    last = max(allm, key=lambda m: m.start())
    return article[: last.start() + 1] + block + article[last.start() + 1 :]


def split_articles(text: str):
    """Return (prefix, [(slug, article_with_leading), suffix_after_array])."""
    m = re.search(r"export const \w+: Article\[\] = \[", text)
    if not m:
        raise RuntimeError("no export")
    prefix = text[: m.end()]
    rest = text[m.end() :]
    # rest starts after `[`
    # find matching end `];`
    end = rest.rfind("];")
    body = rest[:end]
    suffix = rest[end:]
    # split on article starts
    chunks = re.split(r"(?=\n  \{\n    slug:)", body)
    # first chunk may be whitespace
    articles = []
    lead = chunks[0]
    for ch in chunks[1:]:
        sm = re.search(r'slug:\s*"([^"]+)"', ch)
        articles.append((sm.group(1), ch))
    return prefix, lead, articles, suffix


def bump_read(article: str, extra_words: int) -> str:
    m = re.search(r"readMinutes: (\d+)", article)
    if not m:
        return article
    cur = int(m.group(1))
    add = max(2, extra_words // 130)
    return article[: m.start(1)] + str(min(cur + add, 16)) + article[m.end(1) :]


def main():
    for path in sorted(STORIES.glob("*.ts")):
        text = path.read_text()
        prefix, lead, articles, suffix = split_articles(text)
        out_arts = []
        for slug, art in articles:
            if slug in INSERTS:
                extra = INSERTS[slug]
                words = len(re.findall(r"\b[\w']+\b", extra))
                art = insert_before_last_p(art, extra)
                art = bump_read(art, words)
                print(f"  +{words:4d} words  {slug}")
            else:
                print(f"  skip          {slug}")
            out_arts.append(art)
        path.write_text(prefix + lead + "".join(out_arts) + suffix)


if __name__ == "__main__":
    main()
