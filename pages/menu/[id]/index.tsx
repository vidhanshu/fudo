import React from 'react'
import { useRouter } from 'next/router'
import MenuLayout from '@/src/menu/components/MenuLayout'
import Image from 'next/image'

const Page = () => {
    const { query: { id } } = useRouter()
    return (
        <div className="flex gap-5">
            <Image src="/home/pancake.jpeg" width={500} height={500} alt="" className="rounded-lg"/>

            <div>
                <h1 className="typo-title-lg">Pizza</h1>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem vero minus dolorum reiciendis aliquid tempora rerum iure eveniet omnis autem quae eaque harum, inventore distinctio ipsum natus praesentium. A.
                    Mollitia aliquam rem odit laudantium voluptates. Deleniti labore impedit eveniet numquam? Ipsum cupiditate ut odit? Magni beatae error facilis atque excepturi sint maxime reiciendis autem odit! Vero amet natus sequi?
                    Esse animi fugiat inventore omnis minus corporis suscipit commodi ab. Nostrum voluptatem est assumenda, numquam sunt nihil quibusdam quidem corporis modi quisquam culpa saepe animi nam a perspiciatis odio non!
                    Voluptatum rerum enim expedita harum maiores quasi magni quidem sint similique ea aspernatur, officia quisquam possimus delectus nam perspiciatis, tempore consequuntur. Debitis eaque, pariatur illum sequi non reprehenderit animi dignissimos.
                    Beatae laborum corporis expedita possimus vel neque at minus. Rem, sed! Delectus eligendi similique hic asperiores, odio laboriosam labore harum, quo ab odit fuga accusamus velit iste architecto minus! Consectetur?
                </p>
            </div>
        </div>
    )
}

export default Page

Page.getLayout = (page: React.ReactElement) => {
    return <MenuLayout showSearchBar={false}>{page}</MenuLayout>
}