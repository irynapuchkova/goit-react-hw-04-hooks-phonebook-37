import PropTypes from 'prop-types';
import { Title, Input, Wrapper } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Filter"
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
