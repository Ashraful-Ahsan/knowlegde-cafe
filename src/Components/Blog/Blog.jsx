import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    return (
        <div>
            console.log(blog);
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;