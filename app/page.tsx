"use client"
import { MainPage } from "@/modules/layout/main-page/main-page";
import { ColumnWrapper } from "@/modules/layout/main-page/components/column-wrapper";
import Image from "next/image";
import { ButtonWrapperColumnDirection } from "@/modules/layout/main-page/components/button-wrapper";
import { Button } from "@/components/ui/button";
import { ModalWindow } from "@/modals/modal";
import { useModalStore } from "@/store/store-modal";
import { HelpData } from "@/modals/modal";
import Link from "next/link";
import "./style.css";


export default function Home() {
  const isHelpOpen  = useModalStore(state => state.modals.isHelpOpen);
  const isPlayOpen = useModalStore(state => state.modals.isPlayOpen);
  const closeModal = useModalStore(state => state.closeModal);
  const openModal = useModalStore(state => state.openModal);

  return (
    <> 
    <MainPage>
              <div className="main">
            <div className="div">
                <div className="first-part">
                    <div className="overlap">
                        <div className="text-wrapper">Лого <br />кубиків</div>
                        <img className="dice-cube" src="https://c.animaapp.com/mb8auknn9fM1k2/img/dice-cube-1.png" />
                    </div>
                    <div className="central-block">
                        <div className="title">
                            <div className="overlap-group">
                                <img className="monopoly" src="https://c.animaapp.com/mb8auknn9fM1k2/img/monopoly.png" />
                                <img className="cyber-punk" src="https://c.animaapp.com/mb8auknn9fM1k2/img/cyberpunk.png" />
                            </div>
                        </div>
                        <p className="p">Будуй власну імперію, здобувай ресурси та змагайся з друзями за панування в кіберсвіті!</p>
                        <Link href="/nick-name"><div className="buttom" onClick={() => openModal("isPlayOpen")}><div className="text-wrapper-2">Play</div></div></Link>
                    </div>
                    <div className="view">
                        <div className="text-wrapper-3">Board</div>
                        <div className="text-wrapper-3">Gameplay</div>
                    </div>
                </div>
                <div className="second-part">
                    <div className="overlap-2">
                        {/* <img className="img" src="/229655a68bc2477f02ffbbb8a1ba3c7b726e0c87.jpg" /> */}
                        {/* <img className="img" src="https://c.animaapp.com/mb8auknn9fM1k2/img/bdd319feedf8fd013280e88055896619-2.svg" /> */}
                        {/* <div className="text-wrapper-4">Board Journey</div> */}
                        <img className="text-wrapper-4" src="/Board Journey.svg" />
                        <div className="group">
                            <div className="overlap-group-2">
                                <img
                                    className="element-board-game-mockup"
                                    src="https://c.animaapp.com/mb8auknn9fM1k2/img/02-board-game-mockup.png"
                                />
                                <div className="prison">
                                    {/* <div className="text-wrapper-5">Prison</div> */}
                                    <img className="text-wrapper-5" src="/Prison.svg" />
                                    <p className="text-wrapper-6">
                                        Staying in a prison cell will mean being unable to make a move 3 times in a row.
                                    </p>
                                </div>
                                <div className="public-fund">
                                    {/* <div className="text-wrapper-7">Public Fund</div> */}
                                    <img className="text-wrapper-7" src="/Public Fund.svg" />
                                    <p className="text-wrapper-8">
                                        the place where an interesting journey through the cyberpunk world begins.
                                    </p>
                                </div>
                                <div className="chance">
                                    {/* <div className="text-wrapper-9">Chance</div> */}
                                    <img className="text-wrapper-9" src="/Chance.svg" />
                                    <p className="text-wrapper-10">
                                        the place where an interesting journey through the cyberpunk world begins.
                                    </p>
                                </div>
                                <img className="line" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-5.svg" />
                                <img className="line-2" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-6.svg" />
                                <img className="line-3" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-5.svg" />
                                <div className="go-to-prison">
                                    <p className="text-wrapper-11">As soon as you land on this cell, you are sent to prison.</p>
                                    {/* <div className="text-wrapper-7">Go to Prison</div> */}
                                    <img className="text-wrapper-7" src="/Go to Prison.svg" />
                                </div>
                                <img className="line-4" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-2.svg" />
                                <img className="line-5" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-3.svg" />
                                <img className="line-6" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-4.svg" />
                            </div>
                            <div className="start">
                                {/* <div className="text-wrapper-12">Start</div> */}
                                <img className="text-wrapper-12" src="/Start.svg" />
                                <p className="text-wrapper-13">
                                    the place where an interesting journey through the cyberpunk world begins.
                                </p>
                            </div>
                            <div className="casino">
                                {/* <div className="text-wrapper-14">Casino</div> */}
                                <img className="text-wrapper-14" src="/Casino.svg" />
                                <p className="text-wrapper-15">
                                    Once you get to the Casino field, you can take a risk or refrain from playing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third-part">
                    <div className="group-2">
                        <div className="colors">
                            <div className="ellipse"></div>
                            <div className="ellipse-2"></div>
                            <div className="ellipse-3"></div>
                            <div className="ellipse-4"></div>
                            <div className="ellipse-5"></div>
                        </div>
                        <div className="color">
                            <p className="text-wrapper-16">Before the game you have to choose the color you will play.</p>
                            {/* <div className="text-wrapper-17">Color</div> */}
                            <img className="text-wrapper-17" src="/Color.svg" />
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="nav">
                            <div className="text-wrapper-18">About</div>
                            <div className="text-wrapper-19">Game start</div>
                            <div className="text-wrapper-19">Progress</div>
                            <div className="text-wrapper-19">Purchase</div>
                            <div className="text-wrapper-19">Special blocks</div>
                            <div className="text-wrapper-19">Corners</div>
                            <div className="text-wrapper-19">Selling</div>
                            <div className="text-wrapper-19">Pledge</div>
                            <div className="text-wrapper-19">Finish</div>
                        </div>
                        <img className="line-7" src="https://c.animaapp.com/mb8auknn9fM1k2/img/line-1.svg" />
                    </div>
                    <div className="concept">
                        {/* <div className="text-wrapper-20">Concept</div> */}
                        <img className="text-wrapper-20" src="/Concept.svg" />
                        <p className="text-wrapper-21">
                            The player develops his own business empire in a cyberpunk city dominated by corporations, hackers, and
                            the black market. Starting with a small illegal service or startup, he invests, upgrades his facilities,
                            negotiates, enters into alliances, or conflicts. Each business has unique upgrades, profits, and
                            development strategies. It is important to balance risks, costs, and influence in an ever-changing world.
                        </p>
                    </div>
                    <div className="goal">
                        {/* <div className="text-wrapper-22">Goal</div> */}
                        <img className="text-wrapper-22" src="/Goal.svg" />
                        <p className="text-wrapper-23">
                            To become the most influential player in the market is to achieve economic advantage, displace
                            competitors, and gain control over key areas of the city: technology, security, finance, or information.
                        </p>
                    </div>
                </div>
                <footer className="footer">
                    <div className="overlap-3">
                        <div className="group-3">
                            <p className="text-wrapper-24">
                                Created by Mykhailo Shuvar, Denys Zhyla, Kreminets Ostap, Marta Khabak. Balanced by Hapunovych Vasylyna.
                                Designed by Balaniuk Sofiia
                            </p>
                            <p className="text-wrapper-25">2025 | All rights reserved</p>
                        </div>
                        <div className="logo">
                            <div className="group-4"></div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-3">
                                    <img className="monopoly-2" src="https://c.animaapp.com/mb8auknn9fM1k2/img/monopoly-1.png" />
                                    <img className="cyber-punk-2" src="https://c.animaapp.com/mb8auknn9fM1k2/img/cyberpunk-1.png" />
                                </div>
                            </div>
                        </div>
                        <div className="group-5">
                            <div className="gameplay">
                                <div className="text-wrapper-26">Gameplay</div>
                                <div className="navigation-2">
                                    <div className="nav-2">
                                        <div className="text-wrapper-27">About</div>
                                        <div className="text-wrapper-28">Game start</div>
                                        <div className="text-wrapper-28">Progress</div>
                                        <div className="text-wrapper-28">Purchase</div>
                                        <div className="text-wrapper-28">Special blocks</div>
                                    </div>
                                    <div className="frame">
                                        <div className="text-wrapper-27">Corners</div>
                                        <div className="text-wrapper-28">Selling</div>
                                        <div className="text-wrapper-28">Pledge</div>
                                        <div className="text-wrapper-28">Finish</div>
                                    </div>
                                </div>
                            </div>
                            <div className="board">
                                <div className="text-wrapper-26">Board</div>
                                <div className="frame-2">
                                    <div className="text-wrapper-27">Start</div>
                                    <div className="text-wrapper-28">Prison</div>
                                    <div className="text-wrapper-28">Casino</div>
                                    <div className="text-wrapper-28">Chance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      {/* <ColumnWrapper className="flex-col">
        <Image
          src="/Title.png"
          width={746}
          height={343}
          alt="Monopoly-CyberPunk"
        />
        
        <ButtonWrapperColumnDirection>
          <div className="flex flex-col justify-center h-auto items-center gap-[20px] p-4 rounded-lg">
                          <Link href="/nick-name">
            <Button
              className="text-white text-[90px] min-h-[81px] max-w-[273px] px-4 py-1 rounded-md font-semibold transition-all duration-300"
              style={{
                backgroundImage:
                "linear-gradient(to bottom, rgba(236,31,144,1) 70%, rgba(134,18,82,1))",
                backgroundPosition: "center",
                backgroundSize: "cover",
                fontSize:"32px",
              }}
              onClick={() => openModal("isPlayOpen")}
            >
                Play
            </Button>
            </Link>
          </div>
        </ButtonWrapperColumnDirection>
      </ColumnWrapper> */}

        {isHelpOpen && (
        <ModalWindow closeModalWindow={() => closeModal("isHelpOpen")}> 
            <HelpData/>

        </ModalWindow>
      )}
      {isPlayOpen && (
        <ModalWindow className="" closeModalWindow={() => closeModal("isPlayOpen")}>   
          <HelpData/>
        </ModalWindow>
      )}
    </MainPage>
    </>
  );
}


