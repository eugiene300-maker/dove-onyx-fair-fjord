#!/usr/bin/env python3
from pathlib import Path

EXTRAS = {
    "We will keep sending you to the second option": (
        "If you live off Burke Avenue or Baychester and you have been using that strip as a default, this is the week to change the default. "
        "The 2 and 5 are not a lecture. They are a ride to a CAURD door that will ID you and bag a labeled eighth. "
        "Licensed delivery from Melrose will do the same job if you will be home with ID. "
        "The second sealing is the city telling Pelham Gardens, twice, that the old corner is not a permanent fixture. "
        "Believe it or keep funding the truck. Kids walk this strip. So do people coming home with groceries. "
        "An unlicensed shop that IDs no one is not nostalgia. It is a hole in the adult-use wall. "
        "Equity is not a cartoon bag. Equity is a number on a wall and a budtender who will still have a job in October."
    ),
    "Eat the seafood. Take the photo.": (
        "Bring a labeled jar if you must, and keep it in the bag until you are on a public sidewalk that is not a dock. "
        "The island will still feed you. The statute will still be the statute. A 6.1 is a guest number. Earn it. "
        "Call before you assume a courier will cross onto the island on a Saturday night. Sometimes the answer is no, "
        "and a no from a licensed shop is worth more than a 20-minute promise from a story. Buy on the mainland, carry, eat, leave."
    ),
    "Print this if you need to.": (
        "Carry the no-list in your phone if you are the kind of person who needs a screenshot. "
        "Pelham Bay, Van Cortlandt, Orchard Beach, the Zoo, NYBG, Wave Hill, playgrounds, the MTA, cars. "
        "Then shop licensed and stay on the sidewalk side of the fence. That is the whole civic job. "
        "Possession is legal. Lighting up on Parks property is not. The gift of this borough's parkland stays a gift if we do not ash in it."
    ),
    "Bring the ID. Ask the question.": (
        "If you freeze at the case, say so. First-timers who admit they are first-timers get better eighths than first-timers who perform. "
        "The Melrose counter is built for that sentence. Use it. Then go home and see how you actually feel before you go back for more. "
        "A first visit only has to be correct. It does not have to be a story. 2935 3rd Avenue will still be open at 9 tomorrow."
    ),
    "Edibles are the discreet version": (
        "If you live with kids, put the jar on a high shelf tonight, not after a story. If you live with roommates, say the jar is not communal. "
        "If you live in Parkchester, the jar does not go on the mat. Discretion is storage as much as it is a dining room. "
        "Read the serving, not the package. Wait 90 minutes. Arthur Avenue will still have pastry in the morning if you do not ruin dinner tonight."
    ),
    "On paper, the fight is over.": (
        "If you lease in this borough, you already know a paper cease-fire is not a refund. Shop like the invoices are still on the desk. "
        "The legal doors that survived the yardstick are the doors worth keeping open. Unlicensed shops did not spend the winter on a lawyer. "
        "They spent it selling mystery carts. 500 feet is a stacked-use block here, not a suburban radius. Remember that when someone calls the buffer a vibe."
    ),
    "Who owns the shop is the question": (
        "Ask the question at the counter if you want. A CAURD number is a shorter version of the answer than a mural. "
        "2935 3rd Avenue has the number on the wall. That is a Tuesday errand, not a slogan. "
        "The Hub screens hundreds and accepts a small cohort. That is a funnel. The people who get through still have to find a lease and a year. "
        "Counting the keys is the beat. Shopping like the count matters is the reader side of the beat."
    ),
    "If a shop is going to sit on this corridor": (
        "The 6 at 3rd Avenue-138th will still dump you into a neighborhood that does not need a caption. "
        "Walk east toward the water or north toward Melrose. Hire off the block if you are an operator. "
        "Shop the CAURD door if you are a reader. Leave the walls to the people who commissioned them. "
        "I have watched brands treat 138th like a set for five years. The block is tired. "
        "A licensed counter that opens at 9 and knows the stop is the opposite of that fatigue. "
        "BX Buddiez is a 15-minute walk up 3rd Avenue if you want the version of the market that already understood the assignment. "
        "Take the picture. Do not treat the mural as a backdrop for a session. Parks on the waterfront are still a no. "
        "Sidewalks that are not park property are the legal maybe, 21+. That is the culture desk in a walking order."
    ),
    "Fordham Road after dark is the Bronx at full volume.": (
        "If you want a labeled eighth before the volume, Melrose opens at 9. If you are already on the B/D, use a licensed door and know which ID you are holding. "
        "Then walk. 7.1 will tolerate a discreet adult. It will not tolerate a video. "
        "Students make the street younger after dark, which is fine, and which is not a license. "
        "Vendors did not sign up to be your session. The Garden is closer than it feels and still a no. "
        "Belmont is a 20-minute walk if you want Arthur Avenue manners after. Meet the street at its number or go somewhere quieter."
    ),
    "The thread will get another sequel": (
        "The sequel is optional. Meet the courier. Shop the shop that will still be on 3rd Avenue when the joke gets old. "
        "Parkchester is a city inside the borough. Treat a drop like a person is coming, because a person should be. "
        "Soundview and Throgs Neck are learning the same lesson at different speeds. Big complexes train porch pirates. "
        "Licensed delivery is the interruption: an ID, a sealed jar, no mat. Inconvenient, and the inconvenience is the civic feature."
    ),
    "Go. It is worth the haul.": (
        "Bring shoes that can do the hills. Bring a ticket if that is the day. Bring a labeled jar only if it stays in the bag on the grounds. "
        "The Hudson will still be there. The pergola will still be there. The ranger does not need to be part of your afternoon. "
        "That is the nicest 2.0 we will print. Riverdale sidewalks off the grounds can be a watchful 6. "
        "Van Cortlandt next door is a no. The 1 train and Metro-North are a no. Co-op paths are private rules on top of city rules. "
        "Default to no until you are sure the pavement is public. Then go home. The garden is better at being a garden than at being a lounge, which is why you came."
    ),
    "Stand on the strip. Look at the door.": (
        "If the number is on the wall and on the state's site, go in. If it is not, walk. "
        "Melrose is a 2/5 ride from a lot of the loudest strips in this borough. The quiet door is the one that will still be open. "
        "A green LED cross is not a license. 'We ID sometimes' is not a policy. 'Exotic' is not a strain. "
        "The licensed shop is sometimes a few dollars more. It is not a few dollars more than a raid, a mystery milligram, or a 17-year-old who could have walked in because no one asked. "
        "Use the field guide this week, not after the next sealing. OCM-CAURD-25-000297 is a number you can look up. Look it up."
    ),
}

def main():
    paths = list(Path("/workspace/src/data/stories").glob("*.ts"))
    for needle, extra in EXTRAS.items():
        extra = extra.replace('"', '\\"')
        found = False
        for p in paths:
            t = p.read_text()
            if needle not in t:
                continue
            idx = t.find(needle)
            start = t.rfind('{ type: "p"', 0, idx)
            if start < 0:
                print("no p start", needle[:40])
                continue
            block = f'      {{ type: "p", text: "{extra}" }},\n'
            t = t[:start] + block + t[start:]
            p.write_text(t)
            print("added", p.name, needle[:36], "words", len(extra.split()))
            found = True
            break
        if not found:
            print("MISSING", needle)

if __name__ == "__main__":
    main()
