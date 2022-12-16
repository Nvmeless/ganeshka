import React from 'react'
import { useSelector } from 'react-redux';
import {PostCard} from '../../components/molecules/PostCard'
import usersService from '../../services/user.service';
const fakeData = ({

  1: {
    user: {
      name_user: 'John Doe',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur pariatur asperiores officia! Error minima eaque vero voluptates optio non vitae architecto accusantium iste temporibus asperiores voluptatum fugit tenetur sed repellat assumenda, consequatur in alias aliquid! Doloribus, consectetur dolor omnis fuga odit excepturi amet consequatur illo eius, neque repellat maxime."
  },
  2: {
    user: {
      name_user: 'Lionel Marcel',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur pariatur asperiores officia! Error minima eaque vero voluptates optio non vitae architecto accusantium iste temporibus asperiores voluptatum fugit tenetur sed repellat assumenda, consequatur in alias aliquid! Doloribus, consectetur dolor omnis fuga odit excepturi amet consequatur illo eius, neque repellat maxime."
  },
  3: {
    user: {
      name_user: 'John Doe',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur pariatur asperiores officia! Error minima eaque vero voluptates optio non vitae architecto accusantium iste temporibus asperiores voluptatum fugit tenetur sed repellat assumenda, consequatur in alias aliquid! Doloribus, consectetur dolor omnis fuga odit excepturi amet consequatur illo eius, neque repellat maxime."
  },
  4: {
    user: {
      name_user: 'John Doe',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur pariatur asperiores officia! Error minima eaque vero voluptates optio non vitae architecto accusantium iste temporibus asperiores voluptatum fugit tenetur sed repellat assumenda, consequatur in alias aliquid! Doloribus, consectetur dolor omnis fuga odit excepturi amet consequatur illo eius, neque repellat maxime."
  },
  5: {
    user: {
      name_user: 'John Doe',
    },
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae tenetur pariatur asperiores officia! Error minima eaque vero voluptates optio non vitae architecto accusantium iste temporibus asperiores voluptatum fugit tenetur sed repellat assumenda, consequatur in alias aliquid! Doloribus, consectetur dolor omnis fuga odit excepturi amet consequatur illo eius, neque repellat maxime."
  },
})


export const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users);
  console.log(user);
  return (
    <div>
      <div> Fil d'actualité</div>
      <div>
        {Object.keys(fakeData).map((key, index) =>  {
          return (
            <PostCard user={fakeData[key].user} title={fakeData[key].title} desc={fakeData[key].desc}/>
          )
        })}
      </div>
    </div>
  )
}
