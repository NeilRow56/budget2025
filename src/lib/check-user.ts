import { currentUser } from '@clerk/nextjs/server'
import { prisma } from './prisma'

export const checkUser = async () => {
  const user = await currentUser()

  if (!user) {
    return null
  }

  const loggedInUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id
    }
  })

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser
  }

  const name = `${user.firstName} ${user.lastName}`

  // If not in database, create new user

  const newUser = await prisma.user.create({
    data: {
      clerkUserId: user.id,
      name,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newUser
}
