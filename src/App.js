import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
    const [posts , setPosts] = useState([
            {id: 1 , title: "Javascript 1111" , body: 'Пишем на '},
            {id: 2 , title: "Javascript 111111" , body: 'Пишем '},
            {id: 3 , title: "Javascript 11111" , body: 'Пишем на классах'},
            ]
    )
const [filter , setFilter] = useState({sort:'', query:''})
const  [modal ,setModal] = useState(false)

const sortedPosts = useMemo(()=> {
    if(filter.sort) {
        return [...posts].sort((a , b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
},[filter.sort ,posts])

    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query ,sortedPosts])
const createPost = (newPost) => {
        setPosts([...posts , newPost])
        setModal(false)
}
const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
}


  return (
    <div className={"App"}>
        <MyButton style={{marginTop: 30}} onClick={()=> setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
        </MyModal>

        <hr style={{margin: "15px 0"}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <Postlist remove={removePost} posts ={sortedAndSearchedPosts} title='Список постов 1'/>

    </div>
  );
}

export default App;
