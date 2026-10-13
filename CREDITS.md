# Credits & licenses

## Anatomy meshes
Cervical vertebrae C1–T1, C3–T1 intervertebral discs, clavicles and first ribs:
**BodyParts3D, Copyright (c) 2008 Life Science Integrated Database Center (DBCLS), licensed under CC BY-SA 2.1 Japan**
(https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en). Source: http://lifesciencedb.jp/bp3d/ (STL mirror:
https://github.com/Kevin-Mattheus-Moerman/BodyParts3D). FMA IDs: 12519–12525, 9165, 13322, 13323, 7857, 7987, 13896–13900.
Modifications: decimated (~3.6k triangles per vertebra), re-oriented to the sim frame, lordosis straightened and
scaled, quantized to 16-bit and embedded. Per CC BY-SA, these modified meshes (src/parts/bp3d_data.js) are shared under CC BY-SA 2.1 JP.

## Human figures
Patient, surgeon and staff bodies: **MakeHuman base mesh and default rig + weights, CC0 1.0** (makehumancommunity/makehuman,
`makehuman/data/3dobjs/base.obj`, `data/rigs/default.mhskel`, `default_weights.mhw`; LICENSE.ASSETS.md). Decimated to ~6k triangles,
rig collapsed to 21 bones, gown/cap/mask/glove zones and gown skirt added (src/parts/mh_data.js, humans.js).

## Textures
CC0 1.0 textures from **ambientCG.com** (Lennart Demes): Fabric030 (gown/cap/mask/drape weave normal + roughness),
Terrazzo003 (recoloured to OR speckled vinyl floor), Plaster001 (walls). Downscaled to 256–512 px. Skin pore normal map is procedural.

## Libraries
three.js (MIT).

Training simulation only. Not for clinical use.
