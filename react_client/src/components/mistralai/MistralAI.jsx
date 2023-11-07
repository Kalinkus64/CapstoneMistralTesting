import MistralMessages from "./sub_compt/MistralMessages";
import "../../styles/messages.css";

function MistralAI() {
  document.getElementById("root").style.backgroundImage =
  "url(https://wallpaper.dog/large/525965.jpg)"
  // "url(https://wallpapercave.com/wp/wp4532980.png)"
    // "url(https://4.bp.blogspot.com/-8hAlTAzmKVI/UieFnUsG6cI/AAAAAAAAO8M/E_WOooNRGAg/s1600/Sprite_background_effects_0125.gif)";
  return (
    <>
      <h1 className="message-title">MistralAI | Chat Abot Anything</h1>
      <div className="message-main">
        <MistralMessages />
      </div>
    </>
  );
}

export default MistralAI;
