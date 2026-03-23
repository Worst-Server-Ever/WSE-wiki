Survival

claiming.md - Add information you can automatically earn 100 claim blocks per hour (not while AFK) or you can buy more at /store

Commands

[] = required
() = optional
balance - Check money balance

chat [create/join/leave/list/invite/kick/listrooms] (chatName/playerName) (-private)
Create and join chat rooms
-private will make chat room accessible only with invites from room creator


they have 2 homes by default, more with ranks, + a placed bed location

home (homeName)
Teleport to home location

homes
A list of homes that you can click to teleport to (menu)

removehome (homeName)
Removes home



mail [send/clear/read/sendtemp] [playerName] (time) (message)

Send and receive mail

/cmi mail sendtemp Zrips 24h Quick reminder to vote! this will send email which will expire in 24 hours
(players can't use sendtemp so ignore that and time)


pay [playerName] [amount] 
Perform money transaction - currency is called E-Meralds


playtime
Shows player total play time

shakeitoff
Dismount any entity riding you

spawn
Teleports back to spawn location


tpa [playerName]
Ask the player if you can teleport to them


tpaccept (playerName)
Accept teleport request

tpahere [playerName] 
Asks player to accept teleportation to your location

tpdeny (playerName)
Deny teleport request


warp (warpName)
Teleports to warp location
without warpName opens warp menu to select a warp




Player warps are public warps
some of these commands are not for players

/pw help - Displays the command menu. {N/A}
/pw [warp] - Teleports to the player warp. {pw.warp}
/pw set [name] (player) - Sets a warp to your location. {pw.limit.<#>}
/pw remove [warp] - Removes the warp. {pw.remove}
/pw desc set/remove [warp] [desc] - Manages warp descriptions. {pw.desc}
/pw list (page) (player) - Lists all the current player warps. {pw.list}
/pw near (page) - List all the nearby player warps.
/pw open (menu) (option) - Opens the player menu. {pw.open}
/pw amount (player) - Check how much warps you have. {pw.amount}
/pw rtp - Teleport to a random warp. {pw.rtp}
/pw icon [set/remove] [warp] - Manage warp icons. {pw.icon}
/pw category set/remove/list [warp] (category) - Set a warp category. {pw.category}
/pw rate [warp] [description] - Rate a warp. {pw.rate}
/pw lock [warp] (true/false) - Lock a warp. {pw.lock}
/pw cost set/remove [warp] [cost] - Manage Warp costs. {pw.cost}
/pw reset [warp] - Re-set a warps location. {pw.reset}
/pw rename [warp] [name] - Rename a warp. {pw.rename}
/pw setowner [warp] [player] - Transfer a warp's ownership {pw.setowner}
/pw password set/remove [warp] [password] - Manage warp passwords. {pw.password}
/pw whitelist set/remove/list/disable/enable [warp] [player] - Manage warp whitelist. {pw.whitelist}
/pw ban set/remove/list [warp] (player) (time) (reason) - Manage warp banning. {pw.ban}
/pw managers set/remove/list [warp] (player) - Manage warp managers. {pw.managers}
/pw favourite [warp] (player) - Add a warp to your favourites. {pw.favourite}
/pw removeall [player] - Removes all the player's warps. {pw.admin.removeall}
/pw reload - Reloads all the config files. {pw.admin.reload}
/pw addwarps [player] [amount] - Add more warps to a player. {pw.admin.addwarps}