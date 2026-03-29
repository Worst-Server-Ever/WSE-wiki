# Player Warps

Player warps are public warps created and managed by players. They must be created inside a claim.

Some commands below are admin-only.

## Syntax

- `[]` = required argument
- `()` = optional argument

## Player Commands

| Command | Description | Permission |
| --- | --- | --- |
| `/pw [warp]` | Teleports to a player warp. | `pw.warp` |
| `/pw set [name] (player)` | Sets a warp to your location. | `pw.limit.<#>` |
| `/pw remove [warp]` | Removes a warp. | `pw.remove` |
| `/pw desc set/remove [warp] [desc]` | Manages warp descriptions. | `pw.desc` |
| `/pw list (page) (player)` | Lists current player warps. | `pw.list` |
| `/pw near (page)` | Lists nearby player warps. | `N/A` |
| `/pw open (menu) (option)` | Opens the player warp menu. | `pw.open` |
| `/pw amount (player)` | Shows how many warps you have. | `pw.amount` |
| `/pw rtp` | Teleport to a random warp. | `pw.rtp` |
| `/pw icon [set/remove] [warp]` | Manages warp icons. | `pw.icon` |
| `/pw category set/remove/list [warp] (category)` | Sets or manages a warp category. | `pw.category` |
| `/pw rate [warp] [description]` | Rates a warp. | `pw.rate` |
| `/pw lock [warp] (true/false)` | Locks or unlocks a warp. | `pw.lock` |
| `/pw cost set/remove [warp] [cost]` | Manages warp costs. | `pw.cost` |
| `/pw reset [warp]` | Resets a warp's location. | `pw.reset` |
| `/pw rename [warp] [name]` | Renames a warp. | `pw.rename` |
| `/pw setowner [warp] [player]` | Transfers warp ownership. | `pw.setowner` |
| `/pw password set/remove [warp] [password]` | Manages warp passwords. | `pw.password` |
| `/pw whitelist set/remove/list/disable/enable [warp] [player]` | Manages warp whitelist access. | `pw.whitelist` |
| `/pw ban set/remove/list [warp] (player) (time) (reason)` | Manages warp bans. | `pw.ban` |
| `/pw managers set/remove/list [warp] (player)` | Manages warp managers. | `pw.managers` |
| `/pw favourite [warp] (player)` | Adds a warp to your favourites. | `pw.favourite` |

