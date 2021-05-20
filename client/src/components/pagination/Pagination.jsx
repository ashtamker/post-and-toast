import React from 'react';
import {PaginationItem, Pagination} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import useStyle from './style';

const Pages = () => {
    const classes = useStyle();
    
    return (
        <Pagination 
            classes={{ul:classes.ul}}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/post?page=${1}`} />
            )}
        />
    )
}

export default Pages;