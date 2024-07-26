import React from "react";

import { Link } from "react-router-dom";

import styles from "./Dashboard.css"

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // posts do usuário
  const posts = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/dashboard/create" className="btn">Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
