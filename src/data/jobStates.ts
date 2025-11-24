import type { JobState, ReadOnlyDictionary} from "@data/types";

export const JobStates:ReadOnlyDictionary<JobState> = {
    offer:{
        situation:"Offer",
        figureName:"The Wheel of Fortune",
        icon: "/img/icon-fortunewheel.png",
        styles:{
            color:"color-card-offer",
            background:"bg-card-offer",
            border:"border-card-offer",
            text:"text-card-offer",
            bgGradient:"bg-radial from-card-applied/30 to-card-applied/60 brightness-40 to-50%",
            badge:{
                border:"text-card-offer/20",
                background:"bg-card-offer/20",
            }
        }
    },

    applied:{
        situation:"Applied",
        figureName:"The Waiting",
        icon: "/img/icon-sandclock.png",
        styles:{
            color:"color-card-applied",
            background:"bg-card-applied",
            border:"border-card-applied",
            text:"text-card-applied",
            bgGradient:"bg-radial from-card-applied/30 to-card-applied/60 brightness-40 to-50%",
            badge:{
                border:"text-card-applied/20",
                background:"bg-card-applied/20",
            }
        }
    },
    rejected:{
        situation:"Rejected",
        figureName:"The Reaper",
        icon: "/img/icon-reaper.png",
        styles:{
            color:"color-card-rejected",
            background:"bg-card-rejected",
            border:"border-card-rejected",
            text:"text-card-rejected",
            bgGradient:"bg-radial from-card-rejected/30 to-card-rejected/60 brightness-20 to-50%",
            badge:{
                border:"text-card-rejected/20",
                background:"bg-card-rejected/20",
            }
        },
    },
    interview:{
        situation:"Interview",
        figureName:"The Judgement",
        icon: "/img/icon-scale.png",
        styles:{
            color:"color-card-interview",
            background:"bg-card-interview",
            border:"border-card-interview",
            text:"text-card-interview",
            bgGradient:"bg-radial from-card-interview/30 to-card-interview/60 brightness-20 to-50%",
            badge:{
                border:"text-card-interview/20",
                background:"bg-card-interview/20",
            }
        }
    },
    ghosted:{        
        situation:"Ghosted",
        figureName:"The Ghost",
        icon: "/img/icon-ghost.png",
        styles:{
            color:"color-card-ghosted",
            background:"bg-card-ghosted",
            border:"border-card-ghosted",
            text:"text-card-ghosted",
            bgGradient:"bg-radial from-card-ghosted/30 to-card-ghosted/60 brightness-20 to-50%",
        badge:{
                border:"text-card-ghosted/20",
                background:"bg-card-ghosted/20",
            }
        }
    },
    accepted:{
        situation:"Accepted",
        figureName:"The Star",
        icon: "/img/icon-star.png",
        styles:{
            color:"color-card-accepted",
            background:"bg-card-accepted",
            border:"border-card-accepted",
            text:"text-card-accepted",
            bgGradient:"bg-radial from-card-accepted/30 to-card-accepted/60 brightness-20 to-50%",
        badge:{
                border:"text-card-accepted/20",
                background:"bg-card-accepted/20",
            }
        }
    }
}