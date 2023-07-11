import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import Loading from "../../components/Loading";
import GameContainer from "../../components/GameContainer";
import ErrorMessage from "../../components/Error";
import { Container } from "../../components/Container";
import * as S from "./style";
import NavBar from "../../components/NavBar";
import { Banner } from "../../components/Banner";
import InputArea from "../../components/InputArea";
import { Delimiter } from "../../components/delimiter";
import { ApiData } from "../../@types";
import useFilter from "../../hooks/userFilter";
import Footer from "../../components/Footer";
import { Input } from "../../components/Inputs/Input";
import { Select } from "../../components/Inputs/Select";
import useFetch from "../../hooks/useFetch";

function Favoritos() {
  const [generosUnicos, setGenerosUnicos] = useState<string[]>([]);
  const {
    isLoading,
    error: apiError,
    data: apiData,
  } = useFetch<ApiData>("/data");

  
  // filter
  const {
    datafiltred: filtredMovies,
    setBusca,
    setGenero,
  } = useFilter(apiData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBusca(e.target.value);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(e.target.value);
  };

  useEffect(() => {
    const generos = [...new Set(apiData && apiData.map((item) => item.genre))];
    const generosUnicos = ["Todos", ...generos];
    setGenerosUnicos(generosUnicos);
  }, [apiData]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner>
          <S.BannerText>
            Todos os seus <span>favoritos!</span>
          </S.BannerText>
          <InputArea>
            <Input
              type="search"
              placeholder="Nome do jogo"
              onChange={handleChange}
            />
            <Select
              disabled={isLoading}
              data={generosUnicos}
              onChange={handleSelectChange}
              defaultValue={"Selecione um genero"}
            />
            <button type="button">Pesquisar</button>{" "}
            {/* Botão visual apenas 😁*/}
          </InputArea>
        </Banner>

        <Container>
          <Delimiter>Todos os seus favoritos </Delimiter>

          <S.Conteudo>
            <Loading isloading={isLoading} />

            {apiError && <ErrorMessage message={apiError} />}

            {!apiError && (
              <>
                <GameContainer>
                  {filtredMovies.length > 0 &&
                    filtredMovies.map((data) => {
                      return <GameCard key={data.id} data={data}></GameCard>;
                    })}
                </GameContainer>
                {/* se o array estiver vazio e nao estiver em loading */}
                {!isLoading && filtredMovies.length == 0 && (
                  <ErrorMessage
                    message={
                      "OOPS, Esse jogo não existe pesquise por mais jogos"
                    }
                  />
                )}
              </>
            )}
          </S.Conteudo>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Favoritos;