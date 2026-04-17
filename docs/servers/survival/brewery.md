# Brewery

Survival uses Brewery instead of vanilla potion brewing.

You do not make drinks in a brewing stand. Instead, most brews go through a full process using a cauldron, a heat source, bottles, and sometimes a barrel.

## Getting Started

Before you brew anything, gather these basic items:

- A cauldron filled with water
- A valid heat source under the cauldron
- The recipe ingredients
- A clock
- 3 glass bottles

Some drinks also need a barrel for aging, and some stronger drinks need to be distilled before they are finished.

## Heat Sources

These blocks can heat a brewing cauldron:

- Fire
- Soul Fire
- Lava
- Magma Block
- Campfire
- Soul Campfire

## How Brewery Works

This is the standard process for most brews:

1. Place a cauldron and fill it with water.
2. Add one of the valid heat sources underneath it.
3. Add the ingredients for your recipe by right-clicking the cauldron with each ingredient.
4. Use a clock on the cauldron to check how long the brew has been cooking.
5. When it reaches the correct brew time, use `3` glass bottles on the cauldron to bottle the full batch.

If your timing or ingredients are off, the drink quality can drop, or you may end up making a different brew than you intended.

## Aging and Distilling

Some recipes end after bottling, but others need more work:

- `Aging` means storing the brew in a barrel for the required amount of time.
- `Distilling` means running the brew through the distilling step before it is ready.

In general:

- Beers, wines, ciders, and meads often need aging.
- Stronger drinks like whiskey, rum, or liquor may also require distilling.

If a recipe includes aging or distilling, the brew is not finished when it leaves the cauldron.

## Distilling

Some drinks need to be distilled after they are bottled.

Distilling is done in a brewing stand using `Glowstone Dust` in the top slot as the filter.

### How Distilling Works

1. Finish the cauldron stage and bottle the brew.
2. Put the bottled brew into a brewing stand.
3. Place `Glowstone Dust` in the top slot.
4. Let one full distilling cycle finish.
5. Repeat until you reach the required number of distill runs for that drink.

Stronger drinks usually need distilling before they are ready.

### Drinks That Need Distilling

These drinks on the server require distilling:

| Drink | Distill Requirement |
| --- | --- |
| Apple Liquor | `3 runs` |
| Whiskey | `2 runs` at `50 sec` each |
| Rum | `2 runs` at `30 sec` each |
| Vodka | `3 runs` |
| Mushroom Vodka | `5 runs` |
| Gin | `2 runs` |
| Tequila | `2 runs` |
| Absinthe | `6 runs` at `80 sec` each |
| Green Absinthe | `6 runs` at `85 sec` each |
| Golden Vodka | `3 runs` |
| Fire Whiskey | `3 runs` at `55 sec` each |

## Sealing

Sealing is the final step for a finished brew.

Once a drink has been brewed, and aged or distilled if needed, it can be sealed to create the finished bottle.

### Sealing Table

Brewery supports a sealing table for sealing finished drinks.

By default, the sealing table uses a `Smoker`.

The Brewery docs also list the sealing table recipe as:

- `2 Bottles`
- `4 Planks`

### When To Seal A Drink

Only seal a drink after every required step is complete:

1. Brew it in the cauldron.
2. Bottle it.
3. Distill it if the drink requires distilling.
4. Age it if the drink requires aging.
5. Seal the finished drink.

Sealing is treated as the final step, after Brewery, aging, and distilling.

## Aging

Aging lets you improve certain brews by storing them in barrels.

When a brew is aged correctly, it gains the extra values and effects defined by that drink's recipe. Aging is not required for every brew, so check whether the recipe actually needs it.

### Creating a Barrel

To age a brew, you first need a valid barrel.

Barrels are made by placing a sign on the correct barrel structure and writing `Barrel` on the sign.

![Brewery barrels](/assets/images/brew_barrels.png)

The image above shows the barrel structures used for aging drinks.

### How Aging Works

Once your bottled brew is placed in a barrel, you only need to wait for it to age.

- `1 year` of aging equals `1 in-game day`
- Different drinks need different aging times
- Some recipes also require a specific wood type

If you age a drink for too long or use the wrong wood type, it can spoil.

### Barrel Wood Types Used In Recipes

When a recipe needs a specific barrel wood, these are the wood types used on the server:

- `0` = Any wood
- `1` = Birch
- `2` = Oak
- `4` = Spruce
- `5` = Acacia
- `6` = Dark Oak

## Survival Tips

- Keep a clock with your Brewery setup so you can check cook time quickly.
- Bring all ingredients before you start. Missing a step can ruin the batch.
- Use protected claims for your Brewery setup so nobody interferes with it.
- Store finished brews and aging barrels in a safe place.

## Recipe Reference

| Drink | Ingredients | Cook Time | Distill | Age | Barrel Wood | Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| Wheatbeer | `3 Wheat` | `8 min` | No | `2 years` | Birch | `1` |
| Beer | `6 Wheat` | `8 min` | No | `3 years` | Any | `1` |
| Dark Beer | `6 Wheat` | `8 min` | No | `8 years` | Dark Oak | `2` |
| Red Wine | `5 Sweet Berries` | `5 min` | No | `20 years` | Any | `4` |
| Mead | `6 Sugar Cane` | `3 min` | No | `4 years` | Oak | `2` |
| Apple Mead | `6 Sugar Cane`, `2 Apples` | `4 min` | No | `4 years` | Oak | `4` |
| Cider | `14 Apples` | `7 min` | No | `3 years` | Any | `4` |
| Apple Liquor | `12 Apples` | `16 min` | `3 runs` | `6 years` | Acacia | `5` |
| Whiskey | `10 Wheat` | `10 min` | `2 runs` at `50 sec` | `18 years` | Spruce | `7` |
| Rum | `18 Sugar Cane` | `6 min` | `2 runs` at `30 sec` | `14 years` | Oak | `6` |
| Vodka | `10 Potatoes` | `15 min` | `3 runs` | No | Any | `4` |
| Mushroom Vodka | `10 Potatoes`, `3 Red Mushrooms`, `3 Brown Mushrooms` | `18 min` | `5 runs` | No | Any | `7` |
| Gin | `9 Wheat`, `6 blue-flowers`, `1 Apple` | `6 min` | `2 runs` | No | Any | `6` |
| Tequila | `8 Cactus` | `15 min` | `2 runs` | `12 years` | Birch | `5` |
| Absinthe | `15 Short Grass` | `3 min` | `6 runs` at `80 sec` | No | Any | `8` |
| Green Absinthe | `17 Short Grass`, `2 Poisonous Potatoes` | `5 min` | `6 runs` at `85 sec` | No | Any | `9` |
| Potato Soup | `5 Potatoes`, `3 Short Grass` | `3 min` | No | No | Any | `1` |
| Coffee | `12 Cocoa Beans`, `2 Milk Buckets` | `2 min` | No | No | Any | `3` |
| Eggnog | `5 Eggs`, `2 Sugar`, `1 Milk Bucket` | `2 min` | No | `3 years` | Any | `4` |
| Golden Vodka | `10 Potatoes`, `2 Gold Nuggets` | `18 min` | `3 runs` | No | Any | `6` |
| Fire Whiskey | `10 Wheat`, `2 Blaze Powder` | `12 min` | `3 runs` at `55 sec` | `18 years` | Spruce | `7` |
| Hot Chocolate | `3 Cookies` | `2 min` | No | No | Any | `2` |
| Iced Coffee | `8 Cookies`, `4 Snowballs`, `1 Milk Bucket` | `1 min` | No | No | Any | `4` |

## Aging Recipes

If you only want the drinks that use barrels, these are the aging recipes available on the server:

| Drink | Age | Barrel Wood |
| --- | --- | --- |
| Wheatbeer | `2 years` | Birch |
| Beer | `3 years` | Any |
| Dark Beer | `8 years` | Dark Oak |
| Red Wine | `20 years` | Any |
| Mead | `4 years` | Oak |
| Apple Mead | `4 years` | Oak |
| Cider | `3 years` | Any |
| Apple Liquor | `6 years` | Acacia |
| Whiskey | `18 years` | Spruce |
| Rum | `14 years` | Oak |
| Tequila | `12 years` | Birch |
| Eggnog | `3 years` | Any |
| Fire Whiskey | `18 years` | Spruce |
