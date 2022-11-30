const mongoose = require('mongoose');

const roleMasterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        roleId: {
            type: Number,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Number,
            default: Date.now(),
        },
        updatedAt: {
            type: Number,
            default: Date.now(),
        }

    }, { versionKey: false }
)
module.exports = mongoose.model('role_masters', roleMasterSchema);