import { Subject } from 'rxjs'
import type { InitData } from '../models'
import { newReservation } from '../data'

export const subject = new Subject()

// used rxjs for data manipulation as per the instructions.
export const DataService = {
  changeData: (data: InitData[]) => { subject.next(data) },
  onData: () => subject.asObservable()
}

// method to get new empty reservation
export const getNewReservation = (dataList: InitData[]) => {
  while (dataList.find((d) => d.id === newReservation.id) != null) {
    newReservation.id += 1
  }
  return newReservation
}
