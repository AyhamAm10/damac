import gallery1 from "../assets/gallery-1.png"
import gallery2 from "../assets/gallery-2.png"
import gallery3 from "../assets/gallery-3.png"
import gallery4 from "../assets/gallery-4.png"
import gallery5 from "../assets/gallery-5 (1).png"
import gallery6 from "../assets/gallery-6.png"
import gallery7 from "../assets/gallery-7 (1).png"
import gallery8 from "../assets/gallery-8 (1).png"
import gallery9 from "../assets/gallery-9.png"
import gallery10 from "../assets/gallery-10.png"
import gallery11 from "../assets/gallery-11 (1).png"
import floorplane1 from "../assets/floorplan-placeholder-1 (1).png"
import floorplane2 from "../assets/floorplan-placeholder-2 (2).png"
import { amenitiesListType } from "../type/type"

export const amenitiesList:amenitiesListType[] = [
    {
        id:1,
        title: "Library & Co-Working Space",
        img:gallery1,
        active: false
    },
    {
        id:2,
        title: "Outdoor Yoga",
        img:gallery2,
        active: false
    },
    {
        id:3,
        title: "Ice Bath Station",
        img:gallery3,
        active: false
    },
    {
        id:4,
        title: "Crysal Healing Room",
        img:gallery4,
        active: false
    },
    {
        id:5,
        title: "Outdoor Sauna Cabins",
        img:gallery5,
        active: false
    },
    {
        id:6,
        title: "Sunrise Gym & Monkey Bar Arena",
        img:gallery6,
        active: false
    },
    {
        id:7,
        title: "Wild Garden Amphitheatre",
        img:gallery7,
        active: false
    },
    {
        id:8,
        title: "Forest Hiking Trail",
        img:gallery8,
        active: false
    },
    {
        id:9,
        title: "Grand Water Fountain",
        img:gallery9,
        active: false
    },
    {
        id:10,
        title: "Organic World",
        img:gallery10,
        active: false
    },
    {
        id:11,
        title: "Outdoor Camping",
        img:gallery11,
        active: false
    },
]

export const floorSlider = [
    {
        index: 1 ,
        img:floorplane1 ,
        active : true
    },
    {
        index: 2 ,
        img:floorplane1 ,
        active : false
    }
]