# EvenMoreFish

EvenMoreFish expands Survival fishing with custom fish, fish sizes, competitions, bait, and a fish journal.

## How It Works

EvenMoreFish adds custom fish to normal Minecraft fishing.

- Fish have rarities.
- Fish have sizes, so the same fish can be bigger or smaller each time.
- Some fish may only appear under certain conditions.
- Competitions can reward the biggest, smallest, or most fish depending on the event type.

## How To Catch Fish

Use a fishing rod and fish as normal.

When EvenMoreFish triggers, you can catch custom fish instead of standard Minecraft fishing loot.

If you want to turn EvenMoreFish catches off or back on, use `emf toggle`.

## What Affects Your Catch

Some fish can be limited by conditions such as:

- biome
- world or region
- weather
- in-game time
- real-world time
- moon phase
- nearby player count

In practice, this means where and when you fish can matter. If you are trying to catch a certain fish, change location, weather, or time and try again.

## Fish Size, Rarity, and Chance

Each catch can come from a different rarity.

- More heavily weighted rarities or fish are more common.
- Lower-weighted rarities or fish are rarer.
- Fish also have sizes, so two catches of the same fish can still differ in length.

## Bait

Bait changes the odds of what you catch by boosting the weight of selected fish or rarities.

- Bait does not guarantee a catch.
- It makes boosted targets more likely compared with the normal pool.
- Bait can be applied through the bait GUI.

## Competitions

We run scheduled fishing competitions every day.

Use `emf next` to see when the next competition starts.

Use `emf top` during a competition to check the leaderboard.

### Weekdays

Weekday competitions are biggest fish wins.

- Times: `00:00`, `06:00`, `12:00`, `18:00` UTC
- Duration: `10` minutes
- Minimum players online: `5`

Weekday rewards:

- `1st`: `50` E-Meralds
- `2nd`: `25` E-Meralds
- `3rd`: `5` E-Meralds
- Participation: a thank-you message

### Saturday

- `01:00` UTC: Catch the target fish
- `03:30` UTC: Most fish wins
- `06:00` UTC: Biggest fish wins
- `10:00` UTC: Catch the target fish
- `12:30` UTC: Most fish wins
- `15:00` UTC: Biggest fish wins
- `17:30` UTC: Catch the target fish
- `20:00` UTC: Most fish wins
- `22:30` UTC: Biggest fish wins


### Sunday

- `01:00` UTC: Biggest fish wins
- `03:30` UTC: Catch the target fish
- `06:00` UTC: Most fish wins
- `10:00` UTC: Biggest fish wins
- `12:30` UTC: Catch the target fish
- `15:00` UTC: Most fish wins
- `17:30` UTC: Biggest fish wins
- `20:00` UTC: Catch the target fish
- `22:30` UTC: Most fish wins


Weekend competitions:

- Minimum players online: `10`
- `1st`: `50` E-Meralds
- `2nd`: `25` E-Meralds
- `3rd`: `10` E-Meralds
- Participation: `1` E-Marald

## Menus and Interfaces

EvenMoreFish includes these menus:

- main menu
- fish journal overview
- fish journal rarity/fish pages
- bait menu
- apply bait GUI

## Commands

These are the main EvenMoreFish commands for players:

| Command | Description |
| --- | --- |
| `emf` | Shows the main help message. |
| `emf help` | Shows command help. |
| `emf gui` | Opens the main EvenMoreFish menu. |
| `emf next` | Shows when the next competition starts. |
| `emf top` | Shows the current competition leaderboard. |
| `emf applybaits` | Opens the bait application GUI. |
| `emf journal` | Opens your fish collection journal. |
| `emf toggle` | Toggles fishing rewards on or off. |

## How To Use It

1. Fish normally with a fishing rod.
2. Watch for custom fish names, rarities, and sizes.
3. Use `emf journal` to track what you have discovered.
4. Use `emf applybaits` if you have bait and want better odds for certain catches.
5. Use `emf next` to see when the next fishing competition starts.
6. Use `emf top` during competitions to check the leaderboard.

## Useful Takeaways

- Fish in different places, weather, and times if you want more variety.
- Bigger or smaller fish matter during some competition types.
- Bait improves odds but does not override all catch rules.
- Check `emf next`, `emf top`, and `emf journal` regularly if competitions and collection progress matter to you.
- If a target fish is not appearing, the server may have biome, time, weather, rarity, or region restrictions on it.
