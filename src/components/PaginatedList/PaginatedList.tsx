import React, { useEffect, useState } from "react";
import { Pagination } from "antd";

import GameCard from "../GameCard";
import { datePerse } from "../../utils";
import { IGame } from "../../types/types";

import styles from "./PaginatedList.module.css";

interface IPaginatedList {
  data: IGame[]
}

export const PaginatedList = ({ data }:IPaginatedList) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [games, setGames] = useState<IGame[]>([]);

  const pageChangeHandler = (page: number, pageSize: number) => {
    setPage(page);
    setPerPage(pageSize);
  };

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setGames(data.slice(start, end) || []);
  }, [data, perPage, page]);

  return (
    <>
      <div className={styles.games}>
        {games.length > 0
          ? games.map(
              ({ id, title, genre, publisher, thumbnail, release_date }) => (
                <GameCard
                  key={id}
                  id={id}
                  title={title}
                  genre={genre}
                  imgSrc={thumbnail}
                  publisher={publisher}
                  releaseDate={datePerse(release_date)}
                />
              )
            )
          : null}
      </div>
      <Pagination
        responsive
        hideOnSinglePage
        onChange={pageChangeHandler}
        className={styles.pagination}
        pageSizeOptions={[12, 20, 28, 36, 44]}
        defaultPageSize={perPage}
        defaultCurrent={page}
        total={data?.length}
      />
    </>
  );
};
