import { Technique } from "types";
import stepOverKneebar from "assets/videos/step_over_kneebar.mp4";
import ukiWaza from "assets/videos/uki_waza.mp4";
import ashiEntry from "assets/videos/ashi_entry_top_knee_shield.mp4";

export const techniques: Technique[] = [
  {
    id: "0",
    name: "Step-over Kneebar",
    description:
      "From top half guard, under hook top leg and step over into kneebar position.",
    tags: ["kneebar", "half guard", "leg lock"],
    url: stepOverKneebar,
  },
  {
    id: "1",
    name: "Uki Waza",
    description:
      "From bent over standing with lapel and sleeve. Switch lapel grip to overwrap sleeve grip (double sleeve). Step out to turn the corner, drop with for as a block.",
    tags: ["judo", "takedown", "sacrifice"],
    url: ukiWaza,
  },
  {
    id: "2",
    name: "Ashi Entry From Top Knee Shield",
    description:
      "From top half guard if there is some space to fit toes in. Pin the far arm, hop in with your foot to standard ashi. Collect the far leg for a leg lock.",
    tags: ["half guard", "leg lock"],
    url: ashiEntry,
  },
];
