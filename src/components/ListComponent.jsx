import React from 'react';

const ListComponent = ({ items, renderItem }) => {
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={item.id || index} style={styles.listItem}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default ListComponent;
