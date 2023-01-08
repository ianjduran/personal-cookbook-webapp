import { MdOutlineFastfood, MdOutlineBakeryDining, MdKitchen, MdOutlineWineBar, MdOutlineTakeoutDining } from 'react-icons/md'
import { HiOutlineBeaker, HiOutlineCake, HiOutlineFire, HiOutlineHeart, HiOutlineStar, } from 'react-icons/hi2'
import { RiCupLine, RiLeafLine } from 'react-icons/ri'
import { TbCup, TbToolsKitchen, TbBottle, TbBread } from 'react-icons/tb'
import { BiStoreAlt, BiDrink } from 'react-icons/bi'
import { BsDroplet } from 'react-icons/bs'
import { FaRegLemon } from 'react-icons/fa'

// Mapping Strings to Icons
const icons: { [key: string]: any } = {
    'beaker': HiOutlineBeaker,
    'cakeIcon': HiOutlineCake,
    'fireIcon': HiOutlineFire,
    'heartIcon': HiOutlineHeart,
    'starIcon': HiOutlineStar,
    'fastFoodIcon': MdOutlineFastfood,
    'bakeryIcon': MdOutlineBakeryDining,
    'cupIcon': RiCupLine,
    'coffeeCupIcon': TbCup,
    'kitchenIcon': MdKitchen,
    'toolsKitchenIcon': TbToolsKitchen,
    'storeIcon': BiStoreAlt,
    'leafIcon': RiLeafLine,
    'droppletIcon': BsDroplet,
    'lemmonIcon': FaRegLemon,
    'wineIcon': MdOutlineWineBar,
    'cocktailIcon': BiDrink,
    'bottleIcon': TbBottle,
    'takeoutIcon': MdOutlineTakeoutDining,
    'breadIcon': TbBread,
}

export default icons;

interface IconProps {
    className: string // To pass different Classnames to modify size and color
    style?: string //unused
}

/* Export Custom Icons if needed down below */

