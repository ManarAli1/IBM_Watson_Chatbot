<script>
  window.watsonAssistantChatOptions = {
    integrationID: "1186c7b0-da14-4ad0-846f-e8d47146e143", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "cb60d18a-3d25-4032-940e-e95e33f72939", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
