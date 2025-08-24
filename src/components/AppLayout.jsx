import { Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import NavigationMenu from "./NavigationMenu";
import styles from './AppLayout.module.css'

export default function AppLayout(){
    return <>
                <TopMenu/>
        <main className={styles.appLayoutWrapper}>
            <NavigationMenu/>
            <section className={styles.appLayoutScreen}>
            <Outlet/>
            </section>
        </main>
    </>
}