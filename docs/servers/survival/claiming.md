---
pageClass: claiming-page
---

# Claiming (GriefPrevention)

Survival uses the **GriefPrevention** plugin for land protection.

Use claims to protect your builds, storage, and valuables.

## Claim Blocks

You automatically earn `100` claim blocks per hour while actively playing (AFK time does not count).

If you need more claim blocks faster, you can also buy them at `/store`.

## Create a Claim

You can create a claim in two ways:

1. Place your first chest (auto-creates a starter claim), or
2. Use a golden shovel and click two opposite corners.

If you use a golden shovel, the claim must be at least `10x10` blocks.

Everything inside your claim is protected from outsiders.

If you right-click with a stick inside a claim, you can preview claim borders:

- Glowstone on edges
- Gold blocks on corners

These are visual markers only, not real blocks, and they disappear after interaction/time.

If you try to claim over someone else's area, their claim border preview appears with:

- Netherrack on edges
- Redstone ore on corners

These are also visual markers only.

## Trust a Player

Use `/trust <player>` while standing in your claim to let that player build there.

If you run trust commands outside your claim, permissions may apply to all your claims.

To remove access, use `/untrust <player>`.

## Delete a Claim

To delete a single claim:

1. Stand inside the claim.
2. Run `/abandonclaim`.
3. Run `/abandonclaim` again to confirm.

To delete all your claims:

1. Run `/abandonallclaims`.
2. Run `/abandonallclaims` again to confirm.

## Commands

Most of these commands only work while standing inside your claim.

| Command | Description | Alias |
| --- | --- | --- |
| `/AbandonAllClaims` | Deletes all claims you own. | - |
| `/AbandonClaim` | Deletes the claim you are currently standing in. | - |
| `/AccessTrust` | Lets a player use basic interactables in your claim (like buttons, levers, and beds). | `/at` |
| `/BasicClaims` | Switches your shovel back to normal claim mode. | `/bc` |
| `/ClaimExplosions` | Turns explosion damage on or off in your current claim. | - |
| `/ClaimsList` | Shows your claim list and your current claim block totals. | - |
| `/ContainerTrust` | Lets a player use containers, animals, and crafting/storage blocks in your claim. | `/ct` |
| `/EntryTrust` | Lets a player enter your claim, but not interact with blocks/containers. | - |
| `/ExpandClaim <numberOfBlocks>` | Expands the full side of your claim in the direction you are facing. | - |
| `/GivePet` | Transfers ownership of one of your tamed pets to another player. | - |
| `/IgnoredPlayerList` | Shows everyone you currently have ignored. | `/IgnoreList` |
| `/IgnorePlayer` | Mutes a player's chat messages for you. | `/Ignore` |
| `/PermissionTrust` | Lets a player grant their claim permissions to other players. | `/pt` |
| `/RestrictSubclaim` | Makes a sub-claim private so it does not inherit parent claim permissions. | `/rsc` |
| `/SubdivideClaims` | Switches to subdivision mode so you can make sub-claims inside a main claim. | `/sc` |
| `/Trapped` | Teleports you out if you are stuck inside someone else's claim. | - |
| `/Trust` | Lets a player build and edit inside your claim. | `/t` |
| `/TrustList` | Shows who currently has access in the claim you are in. | - |
| `/UnIgnorePlayer` | Unmutes a player's chat messages for you. | `/UnIgnore` |
| `/UnlockDrops` | Lets other players pick up your dropped items after death. | - |
| `/UnTrust` | Removes a player's access from your claim. | `/ut` |
| `/Untrust All` | Removes all trusted players from your claim. | - |
