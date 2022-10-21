import ConsumerProdeContext from "../../ProdeProvider";
import LineaTorneoConectora from "./LineaTorneoConectora";
import SelectorEquipo from "./SelectorEquipo";

const Torneo = () => {
  const { getOctavoByKey, getTorneoByKey, updateTorneo } =
    ConsumerProdeContext();

  const mostrarcolor = (key_torneo) => {
    return "red";
  };

  const handleOnChangeTorneo = (event) => {
    updateTorneo(event.target.name, event.target.value);
    console.log(getTorneoByKey(event.target.name));
  };

  return (
    <div className="bracket">
      <section className="round of16">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-a")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-b")}</span>
                </div>
              </div>
            </div>

            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-c")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-d")}</span>
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-e")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-f")}</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-g")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-h")}</span>
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-b")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-a")}</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-d")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-c")}</span>
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-f")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-e")}</span>
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className="participant">
                  <span>{getOctavoByKey("1-h")}</span>
                </div>
                <div className="participant">
                  <span>{getOctavoByKey("2-g")}</span>
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
      </section>
      <section className="round quarterfinals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("cuartos-a-1")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-a"), getOctavoByKey("2-b")]}
                    key_selector="cuartos-a-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
                <div className={"participant" + mostrarcolor("cuartos-a-2")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-c"), getOctavoByKey("2-d")]}
                    key_selector="cuartos-a-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("cuartos-b-1")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-e"), getOctavoByKey("2-f")]}
                    key_selector="cuartos-b-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
                <div className={"participant" + mostrarcolor("cuartos-b-2")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-g"), getOctavoByKey("2-h")]}
                    key_selector="cuartos-b-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("cuartos-c-1")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-b"), getOctavoByKey("2-a")]}
                    key_selector="cuartos-c-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
                <div className={"participant" + mostrarcolor("cuartos-c-2")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-d"), getOctavoByKey("2-c")]}
                    key_selector="cuartos-c-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("cuartos-d-1")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-f"), getOctavoByKey("2-e")]}
                    key_selector="cuartos-d-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
                <div className={"participant" + mostrarcolor("cuartos-d-2")}>
                  <SelectorEquipo
                    equipos={[getOctavoByKey("1-h"), getOctavoByKey("2-g")]}
                    key_selector="cuartos-d-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CUARTOS"
                  />
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
      </section>
      <section className="round semifinals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("semi-a-1")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("cuartos-a-1"),
                      getTorneoByKey("cuartos-a-2"),
                    ]}
                    key_selector="semi-a-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="SEMIFINAL"
                  />
                </div>
                <div className={"participant" + mostrarcolor("semi-a-2")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("cuartos-b-1"),
                      getTorneoByKey("cuartos-b-2"),
                    ]}
                    key_selector="semi-a-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="SEMIFINAL"
                  />
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("semi-b-1")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("cuartos-c-1"),
                      getTorneoByKey("cuartos-c-2"),
                    ]}
                    key_selector="semi-b-1"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="SEMIFINAL"
                  />
                </div>
                <div className={"participant" + mostrarcolor("semi-b-2")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("cuartos-d-1"),
                      getTorneoByKey("cuartos-d-2"),
                    ]}
                    key_selector="semi-b-2"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="SEMIFINAL"
                  />
                </div>
              </div>
            </div>
          </div>
          <LineaTorneoConectora />
        </div>
      </section>
      <section className="round finals">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("final-a")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("semi-a-1"),
                      getTorneoByKey("semi-a-2"),
                    ]}
                    key_selector="final-a"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="FINAL"
                  />
                </div>
                <div className={"participant" + mostrarcolor("final-b")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("semi-b-1"),
                      getTorneoByKey("semi-b-2"),
                    ]}
                    key_selector="final-b"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="FINAL"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="round champion">
        <div className="winners">
          <div className="matchups">
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("campeon")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("final-a"),
                      getTorneoByKey("final-b"),
                    ]}
                    key_selector="campeon"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="CAMPEON"
                  />
                </div>
              </div>
            </div>
            <div className="matchup">
              <div className="participants">
                <div className={"participant" + mostrarcolor("tercero")}>
                  <SelectorEquipo
                    equipos={[
                      getTorneoByKey("final-a") === getTorneoByKey("semi-a-1")
                        ? getTorneoByKey("semi-a-1")
                        : getTorneoByKey("semi-a-2"),
                      getTorneoByKey("final-b") === getTorneoByKey("semi-b-1")
                        ? getTorneoByKey("semi-b-1")
                        : getTorneoByKey("semi-b-2"),
                    ]}
                    key_selector="tercero"
                    onChange={handleOnChangeTorneo}
                    title_empty_value="TERCERO"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Torneo;
