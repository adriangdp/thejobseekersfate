import { type JobStylingDictionary } from "@data/types";
import { enumJobStatus } from "@data/enum";

export const JobStyling:JobStylingDictionary = {
    offer:{
        state: enumJobStatus.offer,
        figureName:"The Wheel of Fortune",
        icon: "/img/icon-offer.png",
        styles:{
            color:"color-card-offer",
            background:"bg-card-offer",
            border:"border-card-offer",
            text:"text-card-offer",
            bgGradient:"",
            badge:{
                border:"text-card-offer/20",
                background:"bg-card-offer/20",
            }
        }
    },

    applied:{
        state: enumJobStatus.applied,
        figureName:"The Waiting",
        icon: "/img/icon-applied.png",
        styles:{
            color:"color-card-applied",
            background:"bg-card-applied",
            border:"border-card-applied",
            text:"text-card-applied",
            bgGradient:"bg-radial-[at_50%_35%] from-card-applied/55 to-card-applied/75 to-40% brightness-65",
            badge:{
                border:"text-card-applied/20",
                background:"bg-card-applied/20",
            }
        }
    },
    rejected:{
        state: enumJobStatus.rejected,
        figureName:"The Reaper",
        icon: "/img/icon-rejected.png",
        styles:{
            color:"color-card-rejected",
            background:"bg-card-rejected",
            border:"border-card-rejected",
            text:"text-card-rejected",
            bgGradient:"bg-radial-[at_50%_35%] from-card-rejected/45 to-card-rejected/65 to-40% brightness-65",
            badge:{
                border:"text-card-rejected/20",
                background:"bg-card-rejected/20",
            }
        },
    },
    interview:{
        state: enumJobStatus.interview,
        figureName:"The Judgement",
        icon: "/img/icon-interview.png",
        styles:{
            color:"color-card-interview",
            background:"bg-card-interview",
            border:"border-card-interview",
            text:"text-card-interview",
            bgGradient:"bg-radial-[at_50%_35%] from-card-interview/60 to-card-interview/80 to-40% brightness-65",
            badge:{
                border:"text-card-interview/20",
                background:"bg-card-interview/20",
            }
        }
    },
    ghosted:{        
        state: enumJobStatus.ghosted,
        figureName:"The Ghost",
        icon: "/img/icon-ghost.png",
        styles:{
            color:"color-card-ghosted",
            background:"bg-card-ghosted",
            border:"border-card-ghosted",
            text:"text-card-ghosted",
            bgGradient:"bg-radial-[at_50%_35%] from-card-ghosted/60 to-card-ghosted/80 to-40% brightness-65",
        badge:{
                border:"text-card-ghosted/20",
                background:"bg-card-ghosted/20",
            }
        }
    },
    accepted:{
        state: enumJobStatus.accepted,
        figureName:"The Star",
        icon: "/img/icon-accepted.png",
        styles:{
            color:"color-card-accepted",
            background:"bg-card-accepted",
            border:"border-card-accepted",
            text:"text-card-accepted",
            bgGradient:"bg-radial-[at_50%_35%] from-card-accepted/60 to-card-accepted/80 to-40% brightness-65",
        badge:{
                border:"text-card-accepted/20",
                background:"bg-card-accepted/20",
            }
        }
    }
}