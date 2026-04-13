# Chest Shops

Chest shops let you buy and sell items directly with other players in Survival.

They are best used inside player markets, shop districts, or your own claim when you want to run a simple self-serve shop.

## Before You Start

- Shops can only be created inside claims.
- You must be looking at a valid container when creating the shop.
- The amount of the item in your hand becomes the shop amount.
- If you hold 1 item, the shop will trade 1 item at a time.
- If you hold a stack, the shop will trade that stack size at a time.

## Valid Shop Containers

You can create a shop on these blocks:

- Barrel
- Chest
- Trapped Chest
- Shulker Box

![Valid chest shop containers](/assets/images/shop_containers.gif)

## Supported Currencies

Chest shops can use these currencies:

- Emerald items
- Emerald block items
- E-Meralds
- WPE
- Credits

## How to Create a Shop

1. Put the item you want to sell in your hand.
2. Look at the chest or other valid container you want to use.
3. Run `/cshop create [buy] [sell]`.

`buy` is the price players pay to buy from the shop.

`sell` is the price the shop pays when players sell the item to you.

![Creating and editing a chest shop](/assets/images/shop_customisation.gif)

## Shop Bank

Each shop has its own bank.

- When another player buys from your shop, the payment goes into that shop's bank.
- If your shop buys items from other players, you need to deposit enough money into the shop bank first.
- This helps you control spending and prevents players from selling more items than the shop can afford.

If you want a buy shop to keep working, make sure you top up its bank regularly.

## Shop Renting

Chest shops can also be rented to other players.

This is useful if you want to own a market space and let other players rent individual shops for a set price and time.

Shop owners can manage rent from the `Rent Settings` button in the shop GUI.

From there you can:

- Toggle whether the shop is rentable
- Set how long the rental lasts
- Set the rent price and currency
- Cancel the current rental

![Managing chest shop rental settings](/assets/images/shop_management.gif)

## Tips

- Create shops inside a protected claim so other players cannot interfere with your setup.
- Double-check the item stack in your hand before running the create command.
- Keep an eye on each shop bank, especially if the shop buys items from other players.
- Use clear pricing so players know whether they are buying from you or selling to you.
