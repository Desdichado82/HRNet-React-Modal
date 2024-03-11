
---

# Modal Component

The **Modal** component is a reusable React modal that you can easily integrate into your projects. It provides a simple overlay with customizable content and a close button.

## Installation

You can install the **Modal** component using npm:

```bash
npm install  @desdichado82/hrnet-react-modal@1.1.0
```

## Usage

Import the **Modal** component into your project:

```javascript
import Modal from ' @desdichado82/hrnet-react-modal@1.1.0';
```

Use it in your code:

```javascript
<Modal isOpen={true} onClose={handleClose} message="Hello, world!">
  {/* Your custom content goes here */}
</Modal>
```

## Props

The **Modal** component accepts the following props:

| Prop        | Type     | Default | Description                                                                 |
|-------------|----------|---------|-----------------------------------------------------------------------------|
| `isOpen`    | boolean  | `false` | Controls whether the modal is visible or hidden.                            |
| `onClose`   | function |         | Callback function to close the modal.                                      |
| `message`   | string   |         | The message or content to display within the modal.                         |

## Styling

The **Modal** component uses [Styled-components](https://styled-components.com/) for styling. You can customize the appearance by modifying the styles in your project.

Example usage:

```javascript
import styled from 'styled-components';

const ModalOverlay = styled.div`
  /* Your overlay styles here */
`;

const ModalContent = styled.div`
  /* Your modal content styles here */
`;

const CloseButton = styled.button`
  /* Your close button styles here */
`;
```

## License

This component is released under the MIT License.

---

Feel free to adjust the content and styling according to your needs. Happy coding! 🚀