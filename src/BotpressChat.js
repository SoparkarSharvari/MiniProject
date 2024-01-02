import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BotpressChat = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/' || initialized) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "a0106fb8-2098-4aeb-a3cd-7262b395ad50",
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: "a0106fb8-2098-4aeb-a3cd-7262b395ad50",
        webhookId: "895388e1-1708-4087-8921-009a5c5428b7",
        exposeStore: true,
        useSessionStorage: true,
        enablePersistHistory: true,
        stylesheet: 'https://webchat-styler-css.botpress.app/prod/code/27b13f84-3c7f-4f83-bc8c-25ede6b6a8b9/v214/style.css',
      });

      if (window.botpressWebChat.store && window.botpressWebChat.store.dispatch) {
        window.botpressWebChat.store.dispatch({
          type: 'WebChat/reset',
        });
      }

      setInitialized(true);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, [location.pathname, initialized]);

  const webChatStyle = {
    height: '300px !important',
  };

  return location.pathname === '/' ? <div id="webchat" style={webChatStyle} /> : null;
};

export default BotpressChat;

