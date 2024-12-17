import { useEffect } from 'react';

function BotpressChat() {
  useEffect(() => {
    // Inject Botpress scripts
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    document.body.appendChild(injectScript);

    const customScript = document.createElement('script');
    customScript.src = "https://files.bpcontent.cloud/2024/12/02/09/20241202093701-H557PFOV.js";
    document.body.appendChild(customScript);

    // Clean up the script tags when the component is unmounted
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(customScript);
    };
  }, []);

  return null; // No UI elements in this component
}

export default BotpressChat;