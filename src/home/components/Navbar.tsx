import Container from "@/src/common/components/Container"
import CustomButton from "@/src/common/components/CustomButton"
import Image from "next/image"
import { Nunito } from "next/font/google"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Link from "next/link"

const NunitoFont = Nunito({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
})

const Navbar = () => {

    const { asPath } = useRouter();

    const options = [{
        name: 'Why Fudo ?',
        path: '/'
    }, {
        name: 'Services',
        path: '/services'
    }, {
        name: 'Menu',
        path: '/menu'
    }, {
        name: 'Order',
        path: '/order'
    }]

    let active = 0;

    useEffect(() => {
        options.forEach((option, index) => {
            if (option.path === asPath) {
                active = index;
            }
        })
    }, [asPath])

    return (
        <Container className="flex justify-between items-center py-4">
            <Image src="/home/logo.svg" alt="logo" width={100} height={100} />

            <ul className={`flex gap-10 ${NunitoFont.className}`}>
                {
                    options.map(({ name, path }, index) => (
                        <li key={path} className={`
                            font-semibold text-[1.1rem] relative
                            ${active === index ?
                                'text-primary-main after:content-[""] after:absolute after:w-2 after:h-2 after:rounded-full after:-bottom-4 after:bg-primary-main after:left-0 after:right-0 after:mx-auto' :
                                ''
                            }
                        `}>
                            <Link href={path}>{name}</Link>
                        </li>
                    ))
                }
            </ul>

            <CustomButton size="md">
                Get started
            </CustomButton>
        </Container>
    )
}

export default Navbar