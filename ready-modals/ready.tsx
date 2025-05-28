import { MiniModal } from "@/ai-assistent/claude/mini-modal-card"
import  {ModalBlockWrapper} from  "@/ai-assistent/claude/mini-modal-card"







export const MessageImages = { 
    yourTurn: "/Now it's your turn.png",
    virus: "/Virus in the system!.png",
    yourData: "/Your data is lost!.png",
    hackerCollapse: "/Hacker Collapse!.png",
    fatalError: "/Fatal error in code.png",
    interception: "/Interception of Information.png",
    globalEconomic: "/Global Economic Forum.png",
    cyberHealth: "/Cyber-health of the population.png",
    ecological: "/Ecological Grant for Startups.png",
    antiCorruption: "/Anti-Corruption Fund.png",
    digitalSecurity: "/Digital Security for All.png",
    digitalTax: "/Digital Tax.png",
    movedPrison: "/You moved to PRISON.png",
    movedCasino: "/You moved to CASINO.png",
    freedom: "/Get out of PRISON.png",
    bet: "/What is your bet_.png",
    oops: "/Ooops....png",
    notBad: "/Not bad.png",
    good: "/Good.png",
    jackpot: "/Jackpot!.png",
    droneFactory: "/Drone Factory.png",
    cyberFactory: "/Cybernetic Factory.png",
    gridNode1: "/GridNode_ financial gateway (1).png",
    gridNode2: "/Group 26 (11).png",
    gridNode3: "/Group 26 (8).png",
    gridNode4: "/Group 26 (12).png",
    gridNode5: "/Group 26 (9).png",
    shadowNetwork: "/Group 26 (7).png",
    bridNet: "/GridNet_ Black Data Market (1).png",
    shadow: "/Shadow Courier (4).png",
    buyingSuccessful: "/Frame 21 (1).png",

    auction: "/Auction (2).png",
    participateAuction: "/Want to participate in the auction_ (1).png",  
    winnerAuction: "/You have entered your property (1).png",
    enteredProperty: `You have entered ${anotherUser} property (1).png`,
    wantToPledge: "/Want to pledge the property_.png",
    pledgeIsSuccessful: "/Pledge is successful!.png",
    oops2: "/Ooops....png",
};

const MessageTexts = {
    yourTurn: "Tap ENTER to roll the dice",
    virus: "Skip 1 turn while your system is undergoing a security check.",
    yourData: "You lose 100 cr. to restore your data.",
    hackerCollapse: "All players pay 50 cr. as compensation for the network breach.",
    fatalError: "All players return to the nearest \"Chance\" space.",

    interception: "Click Y to draw the \"Public Funds\" card.",
    globalEconomic: "Get 150 cr. for participating in an international conference.",
    cyberHealth: "All players pay 60 cr. to support cyber defense.",
    ecological: "All players with up to 3 assets receive 200 cr. as support.",
    antiCorruption: "Skip 1 turn while your corporation is being inspected.",
    digitalSecurity: "Receive 100 cr. for contributing to state cybersecurity.",

    digitalTax: "Sorry, but it is -100 cr. on your balance.",
    movedPrison: "Don't move for three times or pay 50 cr.",
    freedom: "You paid 50 cr. and now can play back!",
    movedCasino: "Now roll the dice for three times. Click Y to start.",
    bet: "Enter the amount...",

    oops: "You have 0 matches. Unfortunately, you lose your bet.",
    notBad: "You have 1 drop. Good news — you don't lose anything.",
    good: "You have 2 drops. Your bet doubles!",
    jackpot: "You have 3 drops. Your bet triples! Congratulations!",

    droneFactory: "You can buy a factory to collect money from other participants.",
    cyberFactory: "You can buy a factory to collect money from other participants.",

    gridNode1: "The more such objects a player has, the more profit he receives.",
    gridNode2: "The more such objects a player has, the more profit he receives.",
    gridNode3: "The more such objects a player has, the more profit he receives.",
    gridNode4: "The more such objects a player has, the more profit he receives.",
    gridNode5: "The more such objects a player has, the more profit he receives.",
    shadowNetwork:"Wnat to learn more?",

    enteredProperty:`Now he is the owner of the «${cardName}»`, 
    enteredProperty4:"Would you like to upgrade your property?",
    enteredProperty2:"Now it is -2 cr. on your bank account because of rent",
    wantToPledge:"It will cost you half of its full price",
    oops2:"You don’t have money to pay the rent",
}


export function ReadyModals() {
    return  ( 
        <>
                <ModalBlockWrapper>
                    <MiniModal
                        borderColor="rgba(255, 255, 255, 0.2)"
                        backgroundImage="linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1))"
                        src="/example-image.png"
                        width={400}
                        height={100}
                        description="This is your modal description text"
                    />
                </ModalBlockWrapper>
        </>
    )
}

