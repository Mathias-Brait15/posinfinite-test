"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "T-Shirt",
          imgUrl:
            "https://tse4.mm.bing.net/th?id=OIP.07c5i82dkiMhvNStCXQsggHaHa&pid=Api&P=0",
          description:
            "T-Shirt adalah salah satu jenis baju yang menutupi seluruh bagian dada hingga bawah perut. Di samping itu juga t-shirt menutupi sebagian lengan. Secara umum t-shirt tidak memiliki kancing dan kerah pada leher. Produk busana satu ini banyak diminati karena bisa digunakan untuk berbagai kegiatan, bahannya adem dan sederhana. Hal yang paling jelas dilihat adalah bentuknya serupa dengan huruf “T”. Namun belum ada teori pasti apa kepanjangan dari huruf “T” pada T-Shirt sampai saat ini.",
          price: 10000,
          sku: "item-001",
          stock: 100,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jeans",
          imgUrl:
            "https://www.google.com/aclk?sa=l&ai=DChcSEwjkjODgve_8AhV510wCHTt2DpsYABAJGgJ0bQ&sig=AOD64_0WpOswIFMhqFwt0R0NkA7G5OU43g&adurl&ctype=5&ved=2ahUKEwit4NTgve_8AhUH_zgGHZVxCMgQvhd6BAgBEFs",
          description:
            "Bahan kain denim adalah jenis kain yang terbuat dari serat katun berwarna biru atau indigo. Kain denim merupakan jenis kain yang cukup kuat karena ditenun menggunakan katun twill weave secara diagonal. Bahan kain denim juga disebut sebagai kain jeans karena memang sering dijadikan bahan baku pembuatan jeans",
          price: 20000,
          sku: "item-002",
          stock: 100,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Items", null, {});
  },
};
