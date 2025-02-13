const ChatWa = (text) => {
  const whatsappNumber = '62895416029795';
  const message = encodeURIComponent(text);
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
};

export default ChatWa;
