import Auth from "../components/Auth";
import Quotes from "../components/Quotes";

export function Signup() {
    return <>
        <div className="  grid grid-cols-1 lg:grid-cols-2 h-screen ">
            <div className="flex justify-center ">  <Auth type="signup"></Auth></div>
            {/* TODO: remove the div when screen size is is smaller than lg */}
            <div className="hidden lg:block">
                <Quotes
                    quote="Grate website to create and find blogs about topics of varying types, great UI/UX interface. 
                The customer service rep was very helpful"
                    authorName="Julius Kizer" position="GTO | AGNI GROUP">
                </Quotes>
            </div>

        </div>
    </>
}
