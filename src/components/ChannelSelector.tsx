import React from 'react';
import { cn } from "@/lib/utils";

interface ChannelSelectorProps {
  onSelectChannel: (channelId: string) => void;
}

export const ChannelSelector: React.FC<ChannelSelectorProps> = ({ onSelectChannel }) => {
  const [animatingChannel, setAnimatingChannel] = React.useState<string | null>(null);

  const handleChannelClick = (id: string) => {
    setAnimatingChannel(id);
    // Allow animation to play before moving to next step
    setTimeout(() => {
      onSelectChannel(id);
    }, 600);
  };

  return (
    <div className="w-full font-sans fade-in animate-in duration-700">
      <h2 className="text-xl md:text-2xl font-semibold text-center text-[#ff4f00] tracking-tight mb-6">
        How would you like to chat?
      </h2>

      <div className="relative w-full">
        <div
          className="rounded-3xl border-2 border-[#ff4f00] bg-white p-4 flex items-center justify-around shadow-xl"
        >
          {/* Social Icons Row */}
          <div className="flex flex-1 items-center justify-around gap-4 w-full">
            {/* WhatsApp */}
            <button
              onClick={() => handleChannelClick('whatsapp')}
              className={cn(
                "social-icon whatsapp group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'whatsapp' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.218-.651-.132-.966.084-.298.249-.6.393-.788.162-.213.336-.363.504-.548.169-.185.228-.31.343-.548.115-.239.058-.45-.029-.629-.087-.179-.768-1.928-1.077-2.618-.298-.67-.584-.576-.791-.587-.197-.008-.426-.008-.655-.008-.228 0-.598.084-.91.424-.313.34-1.198 1.171-1.198 2.857 0 1.686 1.227 3.314 1.398 3.543.171.229 2.414 3.687 5.85 5.171 2.919 1.261 3.509 1.01 4.14.949.63-.061 2.029-.829 2.315-1.629.286-.8.286-1.487.2-1.629-.086-.142-.315-.229-.658-.4zM12 21.782c-1.788 0-3.527-.47-5.029-1.353l-.361-.212-3.805 1 1.03-3.649-.23-.374C2.658 15.656 2.14 13.882 2.14 12c0-5.436 4.423-9.859 9.859-9.859 5.437 0 9.86 4.423 9.86 9.859 0 5.437-4.423 9.859-9.86 9.859zM12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.167 1.587 5.952L0 24l6.234-1.604C8.01 23.407 9.957 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </div>

              <span className="icon-label">WhatsApp</span>
            </button>

            {/* Telegram */}
            <button
              onClick={() => handleChannelClick('telegram')}
              className={cn(
                "social-icon telegram group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'telegram' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </div>
              <span className="icon-label">Telegram</span>
            </button>

            {/* Slack */}
            <button
              onClick={() => handleChannelClick('slack')}
              className={cn(
                "social-icon slack group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'slack' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.522A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H6.313A2.528 2.528 0 0 1 3.792 8.834a2.528 2.528 0 0 1 2.521-2.521h2.521zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.522-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.166 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zM15.166 17.688a2.528 2.528 0 0 1-2.522-2.522 2.528 2.528 0 0 1 2.522-2.522h6.312A2.528 2.528 0 0 1 21.478 15.166a2.528 2.528 0 0 1-2.522 2.522h-3.79z" />
                </svg>
              </div>
              <span className="icon-label">Slack</span>
            </button>

            {/* Discord */}
            <button
              onClick={() => handleChannelClick('discord')}
              className={cn(
                "social-icon discord group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'discord' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              <span className="icon-label">Discord</span>
            </button>

            {/* Signal */}
            <button
              onClick={() => handleChannelClick('signal')}
              className={cn(
                "social-icon signal group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'signal' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.83.488 3.54 1.334 5.03L2.05 21.05a.75.75 0 0 0 .9 .9l4.02-1.284A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 0 1 8.5 8.5c0 2.052-.72 3.94-1.92 5.422a.75.75 0 0 0-.173.551l1.04 3.256-3.256-1.04a.75.75 0 0 0-.551.173A8.455 8.455 0 0 1 12 20.5a8.5 8.5 0 0 1-8.5-8.5c0-2.052.72-3.94 1.92-5.422a.75.75 0 0 0 .173-.551l-1.04-3.256 3.256 1.04a.75.75 0 0 0 .551-.173A8.455 8.455 0 0 1 12 3.5zM8.5 11c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.828 0 1.5-.672 1.5-1.5S9.328 11 8.5 11zm3.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.828 0 1.5-.672 1.5-1.5S12.828 11 12 11zm3.5 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5c.828 0 1.5-.672 1.5-1.5S16.328 11 15.5 11z" />
                </svg>
              </div>
              <span className="icon-label">Signal</span>
            </button>

            {/* iMessage */}
            <button
              onClick={() => handleChannelClick('imessage')}
              className={cn(
                "social-icon imessage group bg-transparent border-none cursor-pointer flex flex-col items-center",
                animatingChannel === 'imessage' && "is-animating"
              )}
            >
              <div className="icon-container-small">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-[#ff4f00] transition-colors duration-300 group-hover:text-white group-[.is-animating]:text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 5.8 2 10.5c0 2.5 1.6 4.8 4.1 6.3l-.1 2.2c0 .4.4.7.7.5l2.7-1.5c.8.2 1.7.3 2.6.3 5.5 0 10-3.8 10-8.5S17.523 2 12 2zM8.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
              <span className="icon-label">iMessage</span>
            </button>


          </div>

        </div>
      </div>

      <style>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container-small {
          display: inline-flex;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          justify-content: center;
          align-items: center;
          background: #fef2f2;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.1);
          border: 1px solid rgba(220, 38, 38, 0.2);
        }
        
        .social-icon.is-animating .icon-container-small,
        .social-icon:hover .icon-container-small {
          transform: translateY(-10px) scale(1.15);
        }

        .social-icon.is-animating .icon-label,
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(5px);
        }
        
        .icon-label {
          margin-top: 12px;
          color: #ff4f00;
          font-weight: 600;
          opacity: 0.6;
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }
        
        .social-icon.whatsapp.is-animating .icon-container-small,
        .social-icon.whatsapp:hover .icon-container-small {
          background: #25D366;
          box-shadow: 0 0 40px rgba(37, 211, 102, 0.8);
          border-color: #25D366;
        }
        
        .social-icon.telegram.is-animating .icon-container-small,
        .social-icon.telegram:hover .icon-container-small {
          background: #24A1DE;
          box-shadow: 0 0 40px rgba(36, 161, 222, 0.8);
          border-color: #24A1DE;
        }
        
        .social-icon.slack.is-animating .icon-container-small,
        .social-icon.slack:hover .icon-container-small {
          background: #4A154B;
          box-shadow: 0 0 40px rgba(74, 21, 75, 0.8);
          border-color: #4A154B;
        }
        
        .social-icon.discord.is-animating .icon-container-small,
        .social-icon.discord:hover .icon-container-small {
          background: #5865F2;
          box-shadow: 0 0 40px rgba(88, 101, 242, 0.8);
          border-color: #5865F2;
        }
        
        .social-icon.signal.is-animating .icon-container-small,
        .social-icon.signal:hover .icon-container-small {
          background: #3168D8;
          box-shadow: 0 0 40px rgba(49, 104, 216, 0.8);
          border-color: #3168D8;
        }
        
        .social-icon.imessage.is-animating .icon-container-small,
        .social-icon.imessage:hover .icon-container-small {
          background: #2BD43D;
          box-shadow: 0 0 40px rgba(43, 212, 61, 0.8);
          border-color: #2BD43D;
        }
        
        .social-icon.is-animating svg,
        .social-icon:hover svg {
          animation: shake 0.6s infinite;
        }

        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-5px) rotate(-5deg); }
          40% { transform: translateX(5px) rotate(5deg); }
          60% { transform: translateX(-5px) rotate(-5deg); }
          80% { transform: translateX(5px) rotate(5deg); }
        }
        
        .icon-container-small::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .social-icon:hover .icon-container-small::before {
          opacity: 1;
        }

        .pixel-art {
          image-rendering: pixelated;
        }

        .still-lobster {
          mix-blend-mode: multiply;
        }
      `}</style>
    </div>
  );
};
