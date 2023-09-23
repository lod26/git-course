import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        console.log(newPost)
        create(newPost)
        setPost({title: '', body: ''})
    }
    const [post , setPost] = useState({title:'',body:''})
    return (

            <form>
                <MyInput
                    type="text"
                    value={post.title}
                    placeholder={"Название поста"}
                    onChange={e=>setPost({...post , title: e.target.value})}
                />
                <MyInput
                    type="text"
                    value={post.body}
                    placeholder={"Описание поста"}
                    onChange={e=>setPost({...post , body:e.target.value})}
                />

                <MyButton onClick={addNewPost} children={'Создать пост'}></MyButton>
            </form>

    );
};

export default PostForm;