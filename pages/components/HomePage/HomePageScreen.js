import BannerScreen from "../Banner/BannerScreen";
import HomePageLocationBlock from "../Blocks/HomePageLocationBlock";
import QualityStandards from "../Blocks/QualityStandards";
import FiltersHomePageScreen from "../FiltersHomePageScreen/FiltersHomePageScreen";
import NavBarScreen from "../NavBar/Navbar";

export default function HomePageScreen() {
    return (
        <>
            <NavBarScreen />
            <BannerScreen />
            <div
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div style={{ width: '1200px', padding: '10px' }}>
                    <FiltersHomePageScreen />
                    <HomePageLocationBlock />
                    <QualityStandards />
                </div>

            </div>

        </>
    )
}