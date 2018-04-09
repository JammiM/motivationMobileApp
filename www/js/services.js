angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Mediterranean bbq marinade',
    ingredients: [
      '2.5 Tbsp lemon juice',
      '3 Tbsp dried rosemary',
      '2 Tbsp ground cumin',
      '2 Tbsp ground coriander',
      '1 Tbsp dried oregano',
      '1/2 Tsp sea salt',
      '2 Tsp cinnamon'
    ],
    desc: 'The first BBQ marinade we are going to share with you this summer is this very tasty Mediterranean marinade for a healthy bbq recipe that will go down a treat at any dinner party you host with friends this summer.',
    mainimg: 'https://dkx2n65sfmxqe.cloudfront.net/media/2015/04/Summer-BBQ-Mediterranian-Marinade-480x349.jpg',
    steps: [
      'Combine all the ingredients in a bowl. For every 1 lb. of boneless meat or 2 lb if the meat is on the bone, add 2 tablespoons of the Mediterranean mixture.',
      'This makes 1/3 cup.',
      'Let it store for 24 hours—or at least 10 minutes for quicker serving.',
    ]
  }, {
    id: 1,
    name: 'BALSAMIC CHICKEN',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    desc: 'The first BBQ marinade we are going to share with you this summer is this very tasty Mediterranean marinade for a healthy bbq recipe that will go down a treat at any dinner party you host with friends this summer.',
    mainimg: 'https://dkx2n65sfmxqe.cloudfront.net/media/2017/09/Balsamic-Chicken-Website-Receipe-300x216.jpg'

  }, {
    id: 2,
    name: 'Chicken Teriyaki Soba',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    desc: 'The first BBQ marinade we are going to share with you this summer is this very tasty Mediterranean marinade for a healthy bbq recipe that will go down a treat at any dinner party you host with friends this summer.',
    mainimg: 'https://dkx2n65sfmxqe.cloudfront.net/media/2017/08/Chicken-Teriyaki-Soba-Blog-Recipe-555x378.jpg'

  }, {
    id: 3,
    name: 'ASIAN INSPIRED SPICED TURKEY MEATBALLS',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    desc: 'The first BBQ marinade we are going to share with you this summer is this very tasty Mediterranean marinade for a healthy bbq recipe that will go down a treat at any dinner party you host with friends this summer.',
    mainimg: 'https://dkx2n65sfmxqe.cloudfront.net/media/2017/10/Asian-Inspired-Spiced-Turkey-Meatballs-Website-Recipes-555x378.jpg'

  }, {
    id: 4,
    name: 'high protein low carb lasagne',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    desc: 'All the great taste of lasagne but none of the carbs! This high protein recipe for low carb lasagne will leave you feeling full but not bloated as you might do with regular lasagne. And while it is a healthy take on lasagne, it offers the satisfaction you would traditionally expect from this comfort food. Grab a pan, a mixing bowl and a baking pan and away you go.',
    mainimg: 'https://dkx2n65sfmxqe.cloudfront.net/media/2016/08/low-carb-lasagna-sq-015-e1470320331856-736x443.jpg',
    ingredients: [
'16 oz Lean Hamburger Beef',
'8 oz 1% cottage cheese',
'½ cup green onions, chopped',
'1 cup green peppers, chopped finely',
'2 cup tomatoes, cubed',
'3 cup spinach',
'3 oz mozzarella cheese',
'2 garlic cloves, minced',
'Pepper',
'Cayenne pepper',
],
steps: [
'Brown beef in frying pan and drain. Remove from heat and add tomatoes, onions and green pepper. Season meat mixture with garlic, pepper and cayenne (you might consider adding; oregano, Italian seasoning, etc).',
'Layer spinach, cottage cheese and meat mixture in a 9 x 13 dish (1/2 meat mixture, spinach, cottage cheese, 1/2 meat mixture). Top with grated mozzarella cheese.',
'Bake at 400 degrees for 1 hour.'
]

  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
