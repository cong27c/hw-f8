// Xử lý làm phẳng mảng lồng (Flatten Nested Array)
const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];


function flattenCategories(arr, parentId = 0) {0 
    let result = []
    for(let category of arr) {
        let current = {...category, parentId}
        result.push(current)
        if(category.children) {
            result = result.concat(
                flattenCategories(category.children, category.id)
            )
        }
    }
    return result
}
console.log(flattenCategories(categories));