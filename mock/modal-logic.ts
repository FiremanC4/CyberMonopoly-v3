export const mockModal1 = {
    heading: "how to Play",
    firstPart: ["About", "Game Start", "Progress", "Purchase", "Special blocks"],
    secondPart: ["special blocks", "Corners", "Selling", "Pledge", "Final"],
    about: {
        heading: "Concept",
        descriptionOne:
        "The player develops his own business empire in a cyberpunk city dominated by corporations, hackers, and the black market. Starting with a small illegal service or startup, he invests, upgrades his facilities, negotiates, enters into alliances, or conflicts. Each business has unique upgrades, profits, and development strategies. It is important to balance risks, costs, and influence in an ever-changing world.",
        heading2: "Boal",
        descriptionTwo:
        "To become the most influential player in the market is to achieve economic advantage, displace competitors, and gain control over key areas of the city: technology, security, finance, or information.",
    },
    "Game start": {
        heading: "First Move",
        descriptionOne:
        "The game begins when all players have joined the game and are ready to embark on the world of cyberpunk. Since the world of digital networks is full of surprises, the first step to victory begins with chance.",
        heading2: "Determining the First Move",
        descriptionTwo:
        "Each player rolls two dice. The one with the highest number of points starts the game. If several players have the same number of dice, they roll the dice again until it is determined who will start first.",
        heading3: "First Move",
        descriptionThree:
        "The player with the highest number of dice rolls makes the first move, followed by all other players in a clockwise direction."
    },
    Progress: {
        heading: "Gameplay",
        descriptionOne:
        "When it's your turn, roll two dice and move your token the number of spaces that match the dice result. The field you land on will determine your actions. Several tokens can be on one field at the same time.",
        descriptionTwo:
        "Depending on which field you land on, you have to: Buy services, firms, corporations, companies of different price categories.",
        actions: [
        "Buy factories and networks.",
        "Pay rent if you land on another player's field.",
        "Pay taxes and fines.",
        "Draw 'Chance' and 'Public Funds' cards.",
        "Get into quarantine.",
        "Get into the casino field."
        ]
    },
    Purchase: {
        heading: "Buying Cyber Assets",
        descriptionOne:
        "If you land on a space that is not occupied by other players (for example, a service or a company), you have the right to buy it. If you decide to buy a cyber asset, pay the Bank the amount of money indicated on the space.",
        descriptionTwo:
        "If you decide not to buy the asset, the Banker must auction it off and sell it to the player who offers the highest price, starting from any price offered by one of the players.",
        heading2: "Owning Cyber Assets",
        descriptionThree:
        "Owning cyber assets gives you the right to rent them to other players who land on the space that defines your asset.",
        descriptionFour:
        "The player pays you the amount indicated on the asset card. It is very profitable to own all assets of the same color group, as this doubles the rental amount."
    },
     "Special blocks": {
    heading: "Factories",
    descriptionOne:
      "If you stop on one of these spaces, you can buy a factory, provided that this asset is not owned by another player, by paying the amount indicated on the space. If this asset is owned by another player, they may charge you a fee for the production of drones and implants, according to the number of points rolled on the dice when you made the move that brought you to this space.",
    descriptionTwo:
      "If a player owns only one Factory, the fee will be 4 times the number of points rolled on the dice. If a player owns both Factories, you must pay them an amount equal to 10 times the number of points rolled on the dice.",
    descriptionThree:
      "If you decide not to buy the Factory, the Banker must put it up for auction, where players can bid for the highest price. You also have the right to participate in the auction."
  },
  Corners: {
    heading: "Casino",
    descriptionOne:
      "Once you get to the Casino field, you can take a risk or refrain from playing. If you decide to take a risk, then:",
    steps: [
      "1. Make a bet from the budget you have.",
      "2. Roll the dice three times, the system automatically reads the number of points and displays the value."
    ],
    descriptionTwo: "Determine your winnings:"
  },
  Selling: {
    heading: "Selling Cyber Assets",
    descriptionOne:
      "You can sell companies, Factories, or Network Nodes to any player using a special function in the asset menu. The player selects an asset from their portfolio and indicates the price they want to sell it for. After that, another player can accept this offer or offer their own price. If the buyer agrees to the offered price, the deal is confirmed, the money is transferred from the buyer to the seller, and the asset changes hands.",
    descriptionTwo:
      "If players cannot agree on a price, the asset can be put up for internal auction. In the auction, other players can bid on the asset for a certain amount of time, for example, 40 seconds or until all players have placed their bids. The asset will be sold to the player who offers the highest amount. After the auction, the system automatically determines the winner, the asset is transferred to the new owner, and the money to the seller.",
    notes: [
      "If an asset is pledged, you will not be able to sell it until you pay off the pledge.",
      "If an asset has upgrade levels, its price automatically increases."
    ]
  },
   Final: {
    heading: "Bankruptcy",
    descriptionOne:
      "If your debt to the bank or other players exceeds the amount you can get for your assets, you declare bankruptcy and are out of the game.",
    descriptionTwo:
      "When you declare bankruptcy, the system automatically transfers all your assets to the bank. After that, the bank holds an auction where the assets are sold to another player for the highest bid. You cannot control who buys your assets, and you do not receive any funds from the sale.",
    descriptionThree:
      "If you become bankrupt due to debts to another player, your assets (farms, elements) are returned to the bank for half of their original value, and your creditor receives all the funds. If you have collateralized property, you can also sell it to such a player. He must pay the Bank 10%, and then decide whether to buy it back at full value or keep it as collateral.",
    heading2: "Winner",
    descriptionFour:
      "The last player left in the game becomes the winner.",
  },
  Pledge: {
  heading: "Pledge",
  descriptionOne:
    "If you don’t have enough money to pay your debts, you can get money by pledging any asset. To do this, select an asset in your interface and pledge it to the bank. After that, you will receive the amount indicated on the asset card as collateral.",
  descriptionTwo:
    "After you pledge an asset, it remains your property, but you cannot receive income from it (for example, rent) while it is pledged. Other players cannot buy or use this asset until it is returned to you.",
  descriptionThree:
    "If you want to redeem an asset from pledge, you need to repay the pledge amount and pay an additional 10% of its value. After that, the asset becomes yours again, and you can use it again to generate income.",
},

};


