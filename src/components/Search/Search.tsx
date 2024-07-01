import React, { useEffect, useState } from 'react'
import * as styles from './Search.module.css'
import {
    TextInput,
    Button,
    MenuList,
    MenuListItem,
    ScrollView,
    Window,
    WindowContent,
} from 'react95'
import { useNavigate } from 'react-router-dom'

const rarityColor = {
    5: '#ff8000',
    4: '#a335ee',
    3: '#0070dd',
    2: '#1eff00',
    1: '#fff',
    0: '#9d9d9d',
}

interface IItem {
    item_id: number
    item_name: string
    icon_name: string
    rarity: 0 | 1 | 2 | 3 | 4 | 5
}

const mock = [
    {
        item_id: 41092,
        item_name: 'Glyph of Double Jeopardy',
        icon_name: 'inv_glyph_majorpaladin',
        rarity: 1,
    },
    {
        item_id: 93437,
        item_name: "Crafted Dreadful Gladiator's Drape of Cruelty",
        icon_name: 'inv_cape_pandariapvp_d_01',
        rarity: 3,
    },
    {
        item_id: 76668,
        item_name: 'Reckless Vermilion Onyx',
        icon_name: 'inv_misc_gem_x4_rare_cut_orange',
        rarity: 3,
    },
    {
        item_id: 10940,
        item_name: 'Strange Dust',
        icon_name: 'inv_enchant_duststrange',
        rarity: 1,
    },
    {
        item_id: 53010,
        item_name: 'Embersilk Cloth',
        icon_name: 'inv_misc_emberweaveclothbolt_01',
        rarity: 1,
    },
    {
        item_id: 59595,
        item_name: 'R19 Threatfinder',
        icon_name: 'inv_misc_scopec',
        rarity: 3,
    },
    {
        item_id: 76734,
        item_name: "Serpent's Eye",
        icon_name: 'creatureportrait_sc_eyeofacherus_02',
        rarity: 3,
    },
    {
        item_id: 83763,
        item_name: 'Ironscale Leg Armor',
        icon_name: 'inv_misc_armorkit_mop_01',
        rarity: 3,
    },
] as Array<IItem>

const mockReq = async (): Promise<IItem[]> => {
    return new Promise((res) => {
        setTimeout(() => {
            res(mock)
        }, 500)
    })
}

interface IProps {}

export const Search = (props: IProps) => {
    const [inputValue, setInputValue] = useState<string>()
    const [isDropDownShown, setIsDropDownShown] = useState<boolean>()
    const [data, setData] = useState<IItem[]>()

    const navigate = useNavigate();

    const hdlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const fetchData = async (inputValue: string) => {
        if (!inputValue || inputValue.length < 3) return
        const res = await mockReq()
        console.log(res)
        setData(res)
        setIsDropDownShown(true)
    }

    useEffect(() => {
        fetchData(inputValue)
    }, [inputValue])

    const hdlSelectItem = (item: IItem) => {
        navigate(`/${item.item_id}`)
        setIsDropDownShown(false)
        setInputValue('')
    }

    const renderList = (i: IItem) => {
        return (
            <MenuListItem
                key={i.item_id}
                style={{ color: rarityColor[i.rarity] }}
                onClick={(e:any) => {
                    e.stopPropagation()
                    hdlSelectItem(i)
                }}
            >
                {i.item_name}
            </MenuListItem>
        )
    }

    return (
        <div className={styles['kunteynir']}>
            <TextInput
                value={inputValue}
                placeholder="Item name here..."
                onChange={hdlChange}
                fullWidth
            />
            <Button onClick={() => {}} style={{ marginLeft: 4 }}>
                Search
            </Button>
            {!!isDropDownShown && (
                <div className={styles['dropdown']}>
                    <MenuList>
                        <ScrollView style={{ height: '300px' }}>{data.map(renderList)}</ScrollView>
                    </MenuList>
                </div>
            )}
        </div>
    )
}
