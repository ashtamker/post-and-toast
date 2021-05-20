import React, {useEffect} from 'react';
import {PaginationItem, Pagination} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyle from './style';
import { getPosts, getSearchPosts } from '../../actions/posts';

const Pages = ({page}) => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const {numberOfPages} = useSelector((state) => state.posts)

    useEffect(() => {
        if(page) dispatch(getPosts(page))
    }, [page])

    return (
        <Pagination 
            classes={{ul:classes.ul}}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    )
}

export default Pages;