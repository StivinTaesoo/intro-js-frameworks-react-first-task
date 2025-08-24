import "./App.css";
import ProfileCard from "./components/ProfileCard";
import joe from "./assets/joe.png";
import jane from "./assets/jane.png";
import ethan from "./assets/ethan.png";

function App() {
    return (
        <div className="app">
            <h1>My First React App</h1>
            <ProfileCard
                name="Joe Best"
                image={joe}
                description="John is an autombile engineer who is enthusistic about his work and loves to research"
            />
            <ProfileCard
                name="Mimi Jane"
                image={jane}
                description="Mimi Jane is an athlete who has won 25 olympic gold medals but still hungers for more glory."
            />
            <ProfileCard
                name="Ethan Javic "
                image={ethan}
                description="Ethan Javic is a tech enthusiast who's still trying to break into the tech industry. The journey hasn't been void of challenges but his resilience is his driving force"
            />
        </div>
    );
}

export default App;
