const customers = [
  {
    id: 4,
    name: 'Priya Patel',
    email: 'priya@example.com',
    pincode: '560001',
    location_name: 'Bangalore, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 5,
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    pincode: '110001',
    location_name: 'New Delhi, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 6,
    name: 'Neha Gupta',
    email: 'neha@example.com',
    pincode: '400001',
    location_name: 'Mumbai, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 7,
    name: 'Amit Singh',
    email: 'amit@example.com',
    pincode: '700001',
    location_name: 'Kolkata, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 8,
    name: 'Sneha Desai',
    email: 'sneha@example.com',
    pincode: '380001',
    location_name: 'Ahmedabad, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 9,
    name: 'Vivek Verma',
    email: 'vivek@example.com',
    pincode: '600001',
    location_name: 'Chennai, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 10,
    name: 'Ananya Das',
    email: 'ananya@example.com',
    pincode: '700001',
    location_name: 'Kolkata, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 11,
    name: 'Rajesh Joshi',
    email: 'rajesh@example.com',
    pincode: '411001',
    location_name: 'Pune, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 12,
    name: 'Pooja Shah',
    email: 'pooja@example.com',
    pincode: '380001',
    location_name: 'Ahmedabad, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 13,
    name: 'Manish Kumar',
    email: 'manish@example.com',
    pincode: '600001',
    location_name: 'Chennai, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 14,
    name: 'Deepak Singh',
    email: 'deepak@example.com',
    pincode: '400001',
    location_name: 'Mumbai, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 15,
    name: 'Kavita Reddy',
    email: 'kavita@example.com',
    pincode: '500001',
    location_name: 'Hyderabad, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 16,
    name: 'Arun Kumar',
    email: 'arun@example.com',
    pincode: '560001',
    location_name: 'Bangalore, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 17,
    name: 'Anjali Gupta',
    email: 'anjali@example.com',
    pincode: '110001',
    location_name: 'New Delhi, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  },
  {
    id: 18,
    name: 'Ravi Sharma',
    email: 'ravi@example.com',
    pincode: '700001',
    location_name: 'Kolkata, India',
    type: 'C',
    profile_pic: null,
    gst: '',
  }

];

export const fetchProducts = async () => {
  return [
    {
    id: 1,
    name: 'Trendy T-shirt',
    skus: [
      { id: 101, price: 20, quantity: 50 },
      { id: 102, price: 18, quantity: 30 },
    ],
  },
  {
    id: 2,
    name: 'Classic Denim Jeans',
    skus: [
      { id: 201, price: 40, quantity: 20 },
      { id: 202, price: 35, quantity: 15 },
    ],
  },
  {
    id: 3,
    name: 'Sporty Sneakers',
    skus: [
      { id: 301, price: 60, quantity: 10 },
      { id: 302, price: 55, quantity: 8 },
    ],
  },
  {
    id: 4,
    name: 'Stylish Sunglasses',
    skus: [
      { id: 401, price: 25, quantity: 25 },
      { id: 402, price: 20, quantity: 20 },
    ],
  },
  {
    id: 5,
    name: 'Elegant Wristwatch',
    skus: [
      { id: 501, price: 70, quantity: 12 },
      { id: 502, price: 65, quantity: 10 },
    ],
  },
  ];
};

export const fetchCustomerById = async (id) => {
  return customers.find(customer => customer.id === parseInt(id, 10));
};

export const createSaleOrder = async (saleOrderData) => {

  return { success: true, saleOrderData };
};
