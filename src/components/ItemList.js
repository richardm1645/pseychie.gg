import React from "react";
import ItemPanel from "./ItemPanel";


const items = [
  { id: 1, icon: 'item1.png', grade: 'A', description: 'Description of item 1' },
  { id: 2, icon: 'item2.png', grade: 'B', description: 'Description of item 2' },
  { id: 3, icon: 'item3.png', grade: 'C', description: 'Description of item 3' },
  { id: 4, icon: 'item1.png', grade: 'C-', description: 'Description of item 4' },
  { id: 5, icon: 'item2.png', grade: 'B', description: 'Description of item 5' },
  { id: 6, icon: 'item3.png', grade: 'S', description: 'Description of item 6' },
  // Add more items as needed
];

export default function ItemList() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap -mx-4">
        {items.map((item) => (
          <ItemPanel key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

