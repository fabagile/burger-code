// 'use client'
import Link from "next/link";
// import { useMemo } from "react";

import { links } from "./links";

const Navigation = () => {
  // const active = useMemo(()=> links.filter(link=> link.id==""))
  return (
    <>
      <nav>
        <ul className="nav nav-pills">
          {links.map(({ id, url, label }) => (
            <li
              role="presentation"
              key={id}
              className={id == "1" ? "active" : ""}
            >
              <Link href={url}>{label}</Link>
            </li>
          ))}

          {/* $db = Database::connect();
                $statement = $db->query('SELECT * FROM categories');
                $categories = $statement->fetchAll();
                foreach ($categories as $category) 
                {
                    if($category['id'] == '1')
                        echo '<li role="presentation" className="active"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                    else
                        echo '<li role="presentation"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                }

                echo    ' */}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

{
  /* <nav>
                        <ul className="nav nav-pills">';

                $db = Database::connect();
                $statement = $db->query('SELECT * FROM categories');
                $categories = $statement->fetchAll();
                foreach ($categories as $category) 
                {
                    if($category['id'] == '1')
                        echo '<li role="presentation" className="active"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                    else
                        echo '<li role="presentation"><a href="#'. $category['id'] . '" data-toggle="tab">' . $category['name'] . '</a></li>';
                }

                echo    '</ul>
                      </nav> */
}
