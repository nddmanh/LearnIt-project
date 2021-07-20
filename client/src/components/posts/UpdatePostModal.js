import React, { useContext, useEffect, useState }  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PostContext } from '../../contexts/postContext';

const UpdatePostModal = () => {
  // Contexts
  const {
    postState: { post },
    showUpdatePostModal,
    setShowUpdatePostModal,
    updatePost,
    setShowToast
  } = useContext(PostContext);

  // State
  const [updatedPost, setUpdatePost] = useState(post);

  useEffect(() => setUpdatePost(post), [post]);

  const { title, description, url, status } = updatedPost;

  const onChangeUpdatedPostForm = event =>
    setUpdatePost({ ...updatedPost, [event.target.name]: event.target.value });

  const closeDialog = () => {
    setUpdatePost(post);
    setShowUpdatePostModal(false);
  }

  const onSubmit = async event => {
    event.preventDefault();
    const { success, message } = await updatePost(updatedPost);
    setShowUpdatePostModal(false);
    setShowToast({ show: true, message, type: success ? 'success' : 'danger' });
  }

  return (
    <Modal className='mt-5' show={showUpdatePostModal} onHide={closeDialog} >
      <Modal.Header closeButton >
        <Modal.Title>Making progess?</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className='mt-2'>
            <Form.Control
              type='text'
              placeholder='Title'
              name='title'
              required
              aria-describedby='title-help'
              value={title}
              onChange={onChangeUpdatedPostForm}
            />
            <Form.Text id='title-help' muted>
              Required
            </Form.Text>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Description'
              name='description'
              value={description}
              onChange={onChangeUpdatedPostForm}
            />
          </Form.Group>
          <Form.Group className='mt-2'>
            <Form.Control
              type='text'
              placeholder='Youtube Tutorial URL'
              name='url'
              value={url}
              onChange={onChangeUpdatedPostForm}
            />
          </Form.Group>
          <Form.Group className='mt-2'>
            <Form.Control
              as='select'
              name='status'
              value={status}
              onChange={onChangeUpdatedPostForm}
            >
              <option value='TO LEARN' > TO LEARN </option>
              <option value='LEARNING' > LEARNING </option>
              <option value='LEARNED' > LEARNED </option>
            </Form.Control>
            
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeDialog} >
            Cancel
          </Button>
          <Button variant='primary' type='submit'>
            LearnIt!
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default UpdatePostModal;